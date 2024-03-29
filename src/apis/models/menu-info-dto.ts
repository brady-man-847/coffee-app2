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

// May contain unused imports in some cases
// @ts-ignore
import { OptionGroupDto } from './option-group-dto';

/**
 *
 * @export
 * @interface MenuInfoDto
 */
export interface MenuInfoDto {
  /**
   *
   * @type {string}
   * @memberof MenuInfoDto
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof MenuInfoDto
   */
  code: string;
  /**
   *
   * @type {number}
   * @memberof MenuInfoDto
   */
  price: number;
  /**
   *
   * @type {number}
   * @memberof MenuInfoDto
   */
  stock: number;
  /**
   *
   * @type {Array<OptionGroupDto>}
   * @memberof MenuInfoDto
   */
  optionGroupList: Array<OptionGroupDto>;
}
