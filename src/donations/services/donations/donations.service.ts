import {
  BadGatewayException,
  BadRequestException,
  Injectable
} from '@nestjs/common';
import { Request } from 'express';
import { AmountDto } from 'src/donations/dtos/Amount.dto';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Mãos Entrelaçadas'
  }
});

const endpointSecret =
  'whsec_27369e05021a9f13868749b5653f064b35916ad19c651666a8e647948d9fa86b';
@Injectable()
export class DonationsService {
  async createPaymentIntent({ amount }: AmountDto) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'BRL',
      payment_method_types: ['card']
    });

    const clientSecret = paymentIntent.client_secret;

    return clientSecret;
  }

  receiveStatusPaymentWebhook(req: Request) {
    const sig = req.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      throw new BadRequestException(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
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
