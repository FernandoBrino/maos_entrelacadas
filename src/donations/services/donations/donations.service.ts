import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  RawBodyRequest
} from '@nestjs/common';
import { Request } from 'express';
import { AmountDto } from 'src/donations/dtos/Amount.dto';
import Stripe from 'stripe';
import * as dotenv from 'dotenv';
dotenv.config();

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
    // const sig = req.headers['stripe-signature'];
    // let event;
    // try {
    //   event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
    // } catch (err) {
    //   throw new BadRequestException(`Webhook Error: ${err.message}`);
    // }
    switch (req.body.type) {
      case 'payment_intent.amount_capturable_updated':
        const paymentIntentAmountCapturableUpdated = req.body.data.object;
        // Then define and call a function to handle the event payment_intent.amount_capturable_updated
        return paymentIntentAmountCapturableUpdated;
      case 'payment_intent.canceled':
        const paymentIntentCanceled = req.body.data.object;
        // Then define and call a function to handle the event payment_intent.canceled
        return paymentIntentCanceled;
      case 'payment_intent.partially_funded':
        const paymentIntentPartiallyFunded = req.body.data.object;
        // Then define and call a function to handle the event payment_intent.partially_funded
        return paymentIntentPartiallyFunded;
      case 'payment_intent.payment_failed':
        const paymentIntentPaymentFailed = req.body.data.object;
        // Then define and call a function to handle the event payment_intent.payment_failed
        return paymentIntentPaymentFailed;
      case 'payment_intent.processing':
        const paymentIntentProcessing = req.body.data.object;
        // Then define and call a function to handle the event payment_intent.processing
        return paymentIntentProcessing;
      case 'payment_intent.requires_action':
        const paymentIntentRequiresAction = req.body.data.object;
        // Then define and call a function to handle the event payment_intent.requires_action
        return paymentIntentRequiresAction;
      case 'payment_intent.created':
        const paymentIntentPaymentCreated = req.body.data.object;
        // Then define and call a function to handle the event payment_intent.created
        return paymentIntentPaymentCreated;
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = req.body.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        return paymentIntentSucceeded;
      default:
        throw new BadGatewayException(`Unhandled event type ${req.body.type}`);
    }
  }
}
