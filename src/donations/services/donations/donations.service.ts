import { Injectable } from '@nestjs/common';
import { ChargeDto } from 'src/donations/dtos/Charge.dto';
import { GetValueType } from 'src/donations/types/GetValue';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DonationsService {
  private ID_PAYLOAD_FORMAT_INDICATOR = '00';
  private ID_MERCHANT_ACCOUNT_INFORMATION = '26';
  private ID_MERCHANT_ACCOUNT_INFORMATION_GUI = '00';
  private ID_MERCHANT_ACCOUNT_INFORMATION_KEY = '01';
  private ID_MERCHANT_CATEGORY_CODE = '52';
  private ID_TRANSACTION_CURRENCY = '53';
  private ID_TRANSACTION_AMOUNT = '54';
  private ID_COUNTRY_CODE = '58';
  private ID_MERCHANT_NAME = '59';
  private ID_MERCHANT_CITY = '60';
  private ID_ADDITIONAL_DATA_FIELD_TEMPLATE = '62';
  private ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID = '05';
  private ID_CRC16 = '63';

  generatePixCharge(chargeDto: ChargeDto): string {
    const amount = chargeDto.amount;
    const pixCharge = this.getPayload(amount);

    return pixCharge;
  }

  //Método responsável por retornar o valor completo de um objeto do payload
  getValue({ id, value }: GetValueType): string {
    const size = value.length < 10 ? '0' + value.length : value.length;
    const patternValue = id + size + value;
    return patternValue;
  }

  // Método responsável por retornar os valores completos da informação da conta
  getMerchantAccountInformation(): string {
    // Domínio do banco
    const gui = this.getValue({
      id: this.ID_MERCHANT_ACCOUNT_INFORMATION_GUI,
      value: 'br.gov.bcb.pix',
    });

    // Chave Pix
    const key = this.getValue({
      id: this.ID_MERCHANT_ACCOUNT_INFORMATION_KEY,
      value: 'fernandobrino11@gmail.com',
    });

    // Valor completo da conta
    const merchantInformation = this.getValue({
      id: this.ID_MERCHANT_ACCOUNT_INFORMATION,
      value: gui + key,
    });

    return merchantInformation;
  }

  // Método responsável por retornar os valores completos do campo adicional do pix (TXID)
  getAdditionalDataFieldTemplate(): string {
    const txid = this.getValue({
      id: this.ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID,
      value: uuidv4().replace(/-/g, '').slice(0, 20),
    });

    console.log(txid);

    return this.getValue({
      id: this.ID_ADDITIONAL_DATA_FIELD_TEMPLATE,
      value: txid,
    });
  }

  getCRC16(payload: string): string {
    // Adiciona dados gerais no payload
    payload += this.ID_CRC16 + '04';

    // Dados definidos pelo Bacen
    const polinomio = 0x1021;
    let resultado = 0xffff;

    // Checksum
    if (payload.length > 0) {
      for (let offset = 0; offset < payload.length; offset++) {
        resultado ^= payload.charCodeAt(offset) << 8;
        for (let bitwise = 0; bitwise < 8; bitwise++) {
          if ((resultado <<= 1) & 0x10000) resultado ^= polinomio;
          resultado &= 0xffff;
        }
      }
    }

    // Retorna código CRC16 de 4 caracteres
    return this.ID_CRC16 + '04' + resultado.toString(16).toUpperCase();
  }

  // Método responsável por gerar o código completo do payload Pix
  getPayload(amount: string): string {
    const payload =
      this.getValue({
        id: this.ID_PAYLOAD_FORMAT_INDICATOR,
        value: '01',
      }) +
      this.getMerchantAccountInformation() +
      this.getValue({
        id: this.ID_MERCHANT_CATEGORY_CODE,
        value: '0000',
      }) +
      this.getValue({ id: this.ID_TRANSACTION_CURRENCY, value: '986' }) +
      this.getValue({
        id: this.ID_TRANSACTION_AMOUNT,
        value: amount,
      }) +
      this.getValue({ id: this.ID_COUNTRY_CODE, value: 'BR' }) +
      this.getValue({ id: this.ID_MERCHANT_NAME, value: 'Fernando' }) +
      this.getValue({ id: this.ID_MERCHANT_CITY, value: 'Sao vicente' }) +
      this.getAdditionalDataFieldTemplate();

    return payload + this.getCRC16(payload);
  }
}
