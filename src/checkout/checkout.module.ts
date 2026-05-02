import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';
import { Checkout, CheckoutSchema } from './entities/checkout.entity';
import { OrderModule } from '../order/order.module';
import { CartModule } from '../cart/cart.module';
import { Order, OrderSchema } from '../order/entities/order.entity';
import { Cart, CartSchema } from '../cart/entities/cart.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Checkout.name, schema: CheckoutSchema },
      { name: Order.name, schema: OrderSchema },
      { name: Cart.name, schema: CartSchema },
    ]),
    OrderModule,
    CartModule,
  ],
  controllers: [CheckoutController],
  providers: [CheckoutService],
})
export class CheckoutModule {}
