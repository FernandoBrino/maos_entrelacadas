import {
  BadGatewayException,
  BadRequestException,
  Injectable
} from '@nestjs/common';
import { Request } from 'express';
import { AmountDto } from 'src/donations/dtos/Amount.dto';
import Stripe from 'stripe';
import * as dotenv from 'dotenv';
dotenv.config();
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Mãos Entrelaçadas'
  }
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

@Injectable()
export class DonationsService {
  async createPaymentIntent({ amount }: AmountDto) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'BRL',
      payment_method_types: ['card']
    });

    const clientSecret = paymentIntent.client_secret;

    return clientSecret;
  }

  async receiveStatusPaymentWebhook(req: Request) {
    const reqBuffer = await buffer(req.body);
    const sig = req.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(reqBuffer, sig, endpointSecret);
    } catch (err) {
      throw new BadRequestException(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
      case 'payment_intent.amount_capturable_updated':
        const paymentIntentAmountCapturableUpdated = event.data.object;
        // Then define and call a function to handle the event payment_intent.amount_capturable_updated
        return paymentIntentAmountCapturableUpdated;
      case 'payment_intent.canceled':
        const paymentIntentCanceled = event.data.object;
        // Then define and call a function to handle the event payment_intent.canceled
        return paymentIntentCanceled;
      case 'payment_intent.partially_funded':
        const paymentIntentPartiallyFunded = event.data.object;
        // Then define and call a function to handle the event payment_intent.partially_funded
        return paymentIntentPartiallyFunded;
      case 'payment_intent.payment_failed':
        const paymentIntentPaymentFailed = event.data.object;
        // Then define and call a function to handle the event payment_intent.payment_failed
        return paymentIntentPaymentFailed;
      case 'payment_intent.processing':
        const paymentIntentProcessing = event.data.object;
        // Then define and call a function to handle the event payment_intent.processing
        return paymentIntentProcessing;
      case 'payment_intent.requires_action':
        const paymentIntentRequiresAction = event.data.object;
        // Then define and call a function to handle the event payment_intent.requires_action
        return paymentIntentRequiresAction;
      case 'payment_intent.created':
        const paymentIntentCreated = event.data.object;
        // Then define and call a function to handle the event payment_intent.created
        return paymentIntentCreated;
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        return paymentIntentSucceeded;
      default:
        throw new BadGatewayException(`Unhandled event type ${event.type}`);
    }
  }
}
