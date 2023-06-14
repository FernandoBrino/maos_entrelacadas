import { BadGatewayException, Injectable } from '@nestjs/common';
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

// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

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
    return { status: req.body.type };
  }
}
