/* tslint:disable */
/* eslint-disable */
/**
 * Mcafe V2 API
 * Mcafe V2 API 명세서
 *
 * The version of the OpenAPI document: 2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 결제 요청 객체
 * @export
 * @interface PaymentRequestPay
 */
export interface PaymentRequestPay {
  /**
   * room sn
   * @type {number}
   * @memberof PaymentRequestPay
   */
  roomSn: number;
  /**
   * order sn list
   * @type {Array<number>}
   * @memberof PaymentRequestPay
   */
  orderSnList: Array<number>;
}
