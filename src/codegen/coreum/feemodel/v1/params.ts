import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ModelParams define fee model params.
 * There are four regions on the fee model curve
 * - between 0 and "long average block gas" where gas price goes down exponentially from InitialGasPrice to gas price with maximum discount (InitialGasPrice * (1 - MaxDiscount))
 * - between "long average block gas" and EscalationStartBlockGas (EscalationStartBlockGas = MaxBlockGas * EscalationStartFraction) where we offer gas price with maximum discount all the time
 * - between EscalationStartBlockGas (EscalationStartBlockGas = MaxBlockGas * EscalationStartFraction) and MaxBlockGas where price goes up rapidly (being an output of a power function) from gas price with maximum discount to MaxGasPrice  (MaxGasPrice = InitialGasPrice * MaxGasMultiplier)
 * - above MaxBlockGas (if it happens for any reason) where price is equal to MaxGasPrice (MaxGasPrice = InitialGasPrice * MaxGasMultiplier)
 * 
 * The input (x value) for that function is calculated by taking short block gas average.
 * Price (y value) being an output of the fee model is used as the minimum gas price for next block.
 */
export interface ModelParams {
  /** initial_gas_price is used when block gas short average is 0. It happens when there are no transactions being broadcasted. This value is also used to initialize gas price on brand-new chain. */
  initialGasPrice: string;
  /** max_gas_price_multiplier is used to compute max_gas_price (max_gas_price = initial_gas_price * max_gas_price_multiplier). Max gas price is charged when block gas short average is greater than or equal to MaxBlockGas. This value is used to limit gas price escalation to avoid having possible infinity GasPrice value otherwise. */
  maxGasPriceMultiplier: string;
  /** max_discount is th maximum discount we offer on top of initial gas price if short average block gas is between long average block gas and escalation start block gas. */
  maxDiscount: string;
  /** escalation_start_fraction defines fraction of max block gas usage where gas price escalation starts if short average block gas is higher than this value. */
  escalationStartFraction: string;
  /** max_block_gas sets the maximum capacity of block. This is enforced on tendermint level in genesis configuration. Once short average block gas goes above this value, gas price is a flat line equal to MaxGasPrice. */
  maxBlockGas: Long;
  /**
   * short_ema_block_length defines inertia for short average long gas in EMA model. The equation is: NewAverage = ((ShortAverageBlockLength - 1)*PreviousAverage + GasUsedByCurrentBlock) / ShortAverageBlockLength
   * The value might be interpreted as the number of blocks which are taken to calculate the average. It would be exactly like that in SMA model, in EMA this is an approximation.
   */
  shortEmaBlockLength: number;
  /**
   * long_ema_block_length defines inertia for long average block gas in EMA model. The equation is: NewAverage = ((LongAverageBlockLength - 1)*PreviousAverage + GasUsedByCurrentBlock) / LongAverageBlockLength
   * The value might be interpreted as the number of blocks which are taken to calculate the average. It would be exactly like that in SMA model, in EMA this is an approximation.
   */
  longEmaBlockLength: number;
}
export interface ModelParamsProtoMsg {
  typeUrl: "/coreum.feemodel.v1.ModelParams";
  value: Uint8Array;
}
/**
 * ModelParams define fee model params.
 * There are four regions on the fee model curve
 * - between 0 and "long average block gas" where gas price goes down exponentially from InitialGasPrice to gas price with maximum discount (InitialGasPrice * (1 - MaxDiscount))
 * - between "long average block gas" and EscalationStartBlockGas (EscalationStartBlockGas = MaxBlockGas * EscalationStartFraction) where we offer gas price with maximum discount all the time
 * - between EscalationStartBlockGas (EscalationStartBlockGas = MaxBlockGas * EscalationStartFraction) and MaxBlockGas where price goes up rapidly (being an output of a power function) from gas price with maximum discount to MaxGasPrice  (MaxGasPrice = InitialGasPrice * MaxGasMultiplier)
 * - above MaxBlockGas (if it happens for any reason) where price is equal to MaxGasPrice (MaxGasPrice = InitialGasPrice * MaxGasMultiplier)
 * 
 * The input (x value) for that function is calculated by taking short block gas average.
 * Price (y value) being an output of the fee model is used as the minimum gas price for next block.
 */
export interface ModelParamsAmino {
  /** initial_gas_price is used when block gas short average is 0. It happens when there are no transactions being broadcasted. This value is also used to initialize gas price on brand-new chain. */
  initial_gas_price: string;
  /** max_gas_price_multiplier is used to compute max_gas_price (max_gas_price = initial_gas_price * max_gas_price_multiplier). Max gas price is charged when block gas short average is greater than or equal to MaxBlockGas. This value is used to limit gas price escalation to avoid having possible infinity GasPrice value otherwise. */
  max_gas_price_multiplier: string;
  /** max_discount is th maximum discount we offer on top of initial gas price if short average block gas is between long average block gas and escalation start block gas. */
  max_discount: string;
  /** escalation_start_fraction defines fraction of max block gas usage where gas price escalation starts if short average block gas is higher than this value. */
  escalation_start_fraction: string;
  /** max_block_gas sets the maximum capacity of block. This is enforced on tendermint level in genesis configuration. Once short average block gas goes above this value, gas price is a flat line equal to MaxGasPrice. */
  max_block_gas: string;
  /**
   * short_ema_block_length defines inertia for short average long gas in EMA model. The equation is: NewAverage = ((ShortAverageBlockLength - 1)*PreviousAverage + GasUsedByCurrentBlock) / ShortAverageBlockLength
   * The value might be interpreted as the number of blocks which are taken to calculate the average. It would be exactly like that in SMA model, in EMA this is an approximation.
   */
  short_ema_block_length: number;
  /**
   * long_ema_block_length defines inertia for long average block gas in EMA model. The equation is: NewAverage = ((LongAverageBlockLength - 1)*PreviousAverage + GasUsedByCurrentBlock) / LongAverageBlockLength
   * The value might be interpreted as the number of blocks which are taken to calculate the average. It would be exactly like that in SMA model, in EMA this is an approximation.
   */
  long_ema_block_length: number;
}
export interface ModelParamsAminoMsg {
  type: "/coreum.feemodel.v1.ModelParams";
  value: ModelParamsAmino;
}
/**
 * ModelParams define fee model params.
 * There are four regions on the fee model curve
 * - between 0 and "long average block gas" where gas price goes down exponentially from InitialGasPrice to gas price with maximum discount (InitialGasPrice * (1 - MaxDiscount))
 * - between "long average block gas" and EscalationStartBlockGas (EscalationStartBlockGas = MaxBlockGas * EscalationStartFraction) where we offer gas price with maximum discount all the time
 * - between EscalationStartBlockGas (EscalationStartBlockGas = MaxBlockGas * EscalationStartFraction) and MaxBlockGas where price goes up rapidly (being an output of a power function) from gas price with maximum discount to MaxGasPrice  (MaxGasPrice = InitialGasPrice * MaxGasMultiplier)
 * - above MaxBlockGas (if it happens for any reason) where price is equal to MaxGasPrice (MaxGasPrice = InitialGasPrice * MaxGasMultiplier)
 * 
 * The input (x value) for that function is calculated by taking short block gas average.
 * Price (y value) being an output of the fee model is used as the minimum gas price for next block.
 */
export interface ModelParamsSDKType {
  initial_gas_price: string;
  max_gas_price_multiplier: string;
  max_discount: string;
  escalation_start_fraction: string;
  max_block_gas: Long;
  short_ema_block_length: number;
  long_ema_block_length: number;
}
/** Params store gov manageable feemodel parameters. */
export interface Params {
  /** model is a fee model params. */
  model: ModelParams;
}
export interface ParamsProtoMsg {
  typeUrl: "/coreum.feemodel.v1.Params";
  value: Uint8Array;
}
/** Params store gov manageable feemodel parameters. */
export interface ParamsAmino {
  /** model is a fee model params. */
  model?: ModelParamsAmino;
}
export interface ParamsAminoMsg {
  type: "/coreum.feemodel.v1.Params";
  value: ParamsAmino;
}
/** Params store gov manageable feemodel parameters. */
export interface ParamsSDKType {
  model: ModelParamsSDKType;
}
function createBaseModelParams(): ModelParams {
  return {
    initialGasPrice: "",
    maxGasPriceMultiplier: "",
    maxDiscount: "",
    escalationStartFraction: "",
    maxBlockGas: Long.ZERO,
    shortEmaBlockLength: 0,
    longEmaBlockLength: 0
  };
}
export const ModelParams = {
  encode(message: ModelParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initialGasPrice !== "") {
      writer.uint32(10).string(message.initialGasPrice);
    }
    if (message.maxGasPriceMultiplier !== "") {
      writer.uint32(18).string(message.maxGasPriceMultiplier);
    }
    if (message.maxDiscount !== "") {
      writer.uint32(26).string(message.maxDiscount);
    }
    if (message.escalationStartFraction !== "") {
      writer.uint32(34).string(message.escalationStartFraction);
    }
    if (!message.maxBlockGas.isZero()) {
      writer.uint32(40).int64(message.maxBlockGas);
    }
    if (message.shortEmaBlockLength !== 0) {
      writer.uint32(48).uint32(message.shortEmaBlockLength);
    }
    if (message.longEmaBlockLength !== 0) {
      writer.uint32(56).uint32(message.longEmaBlockLength);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ModelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModelParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initialGasPrice = reader.string();
          break;
        case 2:
          message.maxGasPriceMultiplier = reader.string();
          break;
        case 3:
          message.maxDiscount = reader.string();
          break;
        case 4:
          message.escalationStartFraction = reader.string();
          break;
        case 5:
          message.maxBlockGas = (reader.int64() as Long);
          break;
        case 6:
          message.shortEmaBlockLength = reader.uint32();
          break;
        case 7:
          message.longEmaBlockLength = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ModelParams>): ModelParams {
    const message = createBaseModelParams();
    message.initialGasPrice = object.initialGasPrice ?? "";
    message.maxGasPriceMultiplier = object.maxGasPriceMultiplier ?? "";
    message.maxDiscount = object.maxDiscount ?? "";
    message.escalationStartFraction = object.escalationStartFraction ?? "";
    message.maxBlockGas = object.maxBlockGas !== undefined && object.maxBlockGas !== null ? Long.fromValue(object.maxBlockGas) : Long.ZERO;
    message.shortEmaBlockLength = object.shortEmaBlockLength ?? 0;
    message.longEmaBlockLength = object.longEmaBlockLength ?? 0;
    return message;
  },
  fromAmino(object: ModelParamsAmino): ModelParams {
    return {
      initialGasPrice: object.initial_gas_price,
      maxGasPriceMultiplier: object.max_gas_price_multiplier,
      maxDiscount: object.max_discount,
      escalationStartFraction: object.escalation_start_fraction,
      maxBlockGas: Long.fromString(object.max_block_gas),
      shortEmaBlockLength: object.short_ema_block_length,
      longEmaBlockLength: object.long_ema_block_length
    };
  },
  toAmino(message: ModelParams): ModelParamsAmino {
    const obj: any = {};
    obj.initial_gas_price = message.initialGasPrice;
    obj.max_gas_price_multiplier = message.maxGasPriceMultiplier;
    obj.max_discount = message.maxDiscount;
    obj.escalation_start_fraction = message.escalationStartFraction;
    obj.max_block_gas = message.maxBlockGas ? message.maxBlockGas.toString() : undefined;
    obj.short_ema_block_length = message.shortEmaBlockLength;
    obj.long_ema_block_length = message.longEmaBlockLength;
    return obj;
  },
  fromAminoMsg(object: ModelParamsAminoMsg): ModelParams {
    return ModelParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ModelParamsProtoMsg): ModelParams {
    return ModelParams.decode(message.value);
  },
  toProto(message: ModelParams): Uint8Array {
    return ModelParams.encode(message).finish();
  },
  toProtoMsg(message: ModelParams): ModelParamsProtoMsg {
    return {
      typeUrl: "/coreum.feemodel.v1.ModelParams",
      value: ModelParams.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    model: ModelParams.fromPartial({})
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.model !== undefined) {
      ModelParams.encode(message.model, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.model = ModelParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.model = object.model !== undefined && object.model !== null ? ModelParams.fromPartial(object.model) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      model: object?.model ? ModelParams.fromAmino(object.model) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.model = message.model ? ModelParams.toAmino(message.model) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/coreum.feemodel.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};