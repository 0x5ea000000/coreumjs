import { Feature, featureFromJSON, featureToJSON } from "./token";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** EventIssued is emitted on MsgIssue. */
export interface EventIssued {
  denom: string;
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  initialAmount: string;
  description: string;
  features: Feature[];
  burnRate: string;
  sendCommissionRate: string;
}
export interface EventIssuedProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.EventIssued";
  value: Uint8Array;
}
/** EventIssued is emitted on MsgIssue. */
export interface EventIssuedAmino {
  denom: string;
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  initial_amount: string;
  description: string;
  features: Feature[];
  burn_rate: string;
  send_commission_rate: string;
}
export interface EventIssuedAminoMsg {
  type: "/coreum.asset.ft.v1.EventIssued";
  value: EventIssuedAmino;
}
/** EventIssued is emitted on MsgIssue. */
export interface EventIssuedSDKType {
  denom: string;
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  initial_amount: string;
  description: string;
  features: Feature[];
  burn_rate: string;
  send_commission_rate: string;
}
export interface EventFrozenAmountChanged {
  account: string;
  denom: string;
  previousAmount: string;
  currentAmount: string;
}
export interface EventFrozenAmountChangedProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.EventFrozenAmountChanged";
  value: Uint8Array;
}
export interface EventFrozenAmountChangedAmino {
  account: string;
  denom: string;
  previous_amount: string;
  current_amount: string;
}
export interface EventFrozenAmountChangedAminoMsg {
  type: "/coreum.asset.ft.v1.EventFrozenAmountChanged";
  value: EventFrozenAmountChangedAmino;
}
export interface EventFrozenAmountChangedSDKType {
  account: string;
  denom: string;
  previous_amount: string;
  current_amount: string;
}
export interface EventWhitelistedAmountChanged {
  account: string;
  denom: string;
  previousAmount: string;
  currentAmount: string;
}
export interface EventWhitelistedAmountChangedProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.EventWhitelistedAmountChanged";
  value: Uint8Array;
}
export interface EventWhitelistedAmountChangedAmino {
  account: string;
  denom: string;
  previous_amount: string;
  current_amount: string;
}
export interface EventWhitelistedAmountChangedAminoMsg {
  type: "/coreum.asset.ft.v1.EventWhitelistedAmountChanged";
  value: EventWhitelistedAmountChangedAmino;
}
export interface EventWhitelistedAmountChangedSDKType {
  account: string;
  denom: string;
  previous_amount: string;
  current_amount: string;
}
function createBaseEventIssued(): EventIssued {
  return {
    denom: "",
    issuer: "",
    symbol: "",
    subunit: "",
    precision: 0,
    initialAmount: "",
    description: "",
    features: [],
    burnRate: "",
    sendCommissionRate: ""
  };
}
export const EventIssued = {
  encode(message: EventIssued, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.subunit !== "") {
      writer.uint32(34).string(message.subunit);
    }
    if (message.precision !== 0) {
      writer.uint32(40).uint32(message.precision);
    }
    if (message.initialAmount !== "") {
      writer.uint32(50).string(message.initialAmount);
    }
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    writer.uint32(66).fork();
    for (const v of message.features) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.burnRate !== "") {
      writer.uint32(74).string(message.burnRate);
    }
    if (message.sendCommissionRate !== "") {
      writer.uint32(82).string(message.sendCommissionRate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventIssued {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIssued();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.subunit = reader.string();
          break;
        case 5:
          message.precision = reader.uint32();
          break;
        case 6:
          message.initialAmount = reader.string();
          break;
        case 7:
          message.description = reader.string();
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.features.push((reader.int32() as any));
            }
          } else {
            message.features.push((reader.int32() as any));
          }
          break;
        case 9:
          message.burnRate = reader.string();
          break;
        case 10:
          message.sendCommissionRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventIssued>): EventIssued {
    const message = createBaseEventIssued();
    message.denom = object.denom ?? "";
    message.issuer = object.issuer ?? "";
    message.symbol = object.symbol ?? "";
    message.subunit = object.subunit ?? "";
    message.precision = object.precision ?? 0;
    message.initialAmount = object.initialAmount ?? "";
    message.description = object.description ?? "";
    message.features = object.features?.map(e => e) || [];
    message.burnRate = object.burnRate ?? "";
    message.sendCommissionRate = object.sendCommissionRate ?? "";
    return message;
  },
  fromAmino(object: EventIssuedAmino): EventIssued {
    return {
      denom: object.denom,
      issuer: object.issuer,
      symbol: object.symbol,
      subunit: object.subunit,
      precision: object.precision,
      initialAmount: object.initial_amount,
      description: object.description,
      features: Array.isArray(object?.features) ? object.features.map((e: any) => featureFromJSON(e)) : [],
      burnRate: object.burn_rate,
      sendCommissionRate: object.send_commission_rate
    };
  },
  toAmino(message: EventIssued): EventIssuedAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.issuer = message.issuer;
    obj.symbol = message.symbol;
    obj.subunit = message.subunit;
    obj.precision = message.precision;
    obj.initial_amount = message.initialAmount;
    obj.description = message.description;
    if (message.features) {
      obj.features = message.features.map(e => featureToJSON(e));
    } else {
      obj.features = [];
    }
    obj.burn_rate = message.burnRate;
    obj.send_commission_rate = message.sendCommissionRate;
    return obj;
  },
  fromAminoMsg(object: EventIssuedAminoMsg): EventIssued {
    return EventIssued.fromAmino(object.value);
  },
  fromProtoMsg(message: EventIssuedProtoMsg): EventIssued {
    return EventIssued.decode(message.value);
  },
  toProto(message: EventIssued): Uint8Array {
    return EventIssued.encode(message).finish();
  },
  toProtoMsg(message: EventIssued): EventIssuedProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.EventIssued",
      value: EventIssued.encode(message).finish()
    };
  }
};
function createBaseEventFrozenAmountChanged(): EventFrozenAmountChanged {
  return {
    account: "",
    denom: "",
    previousAmount: "",
    currentAmount: ""
  };
}
export const EventFrozenAmountChanged = {
  encode(message: EventFrozenAmountChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.previousAmount !== "") {
      writer.uint32(26).string(message.previousAmount);
    }
    if (message.currentAmount !== "") {
      writer.uint32(34).string(message.currentAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventFrozenAmountChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFrozenAmountChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.previousAmount = reader.string();
          break;
        case 4:
          message.currentAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventFrozenAmountChanged>): EventFrozenAmountChanged {
    const message = createBaseEventFrozenAmountChanged();
    message.account = object.account ?? "";
    message.denom = object.denom ?? "";
    message.previousAmount = object.previousAmount ?? "";
    message.currentAmount = object.currentAmount ?? "";
    return message;
  },
  fromAmino(object: EventFrozenAmountChangedAmino): EventFrozenAmountChanged {
    return {
      account: object.account,
      denom: object.denom,
      previousAmount: object.previous_amount,
      currentAmount: object.current_amount
    };
  },
  toAmino(message: EventFrozenAmountChanged): EventFrozenAmountChangedAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.denom = message.denom;
    obj.previous_amount = message.previousAmount;
    obj.current_amount = message.currentAmount;
    return obj;
  },
  fromAminoMsg(object: EventFrozenAmountChangedAminoMsg): EventFrozenAmountChanged {
    return EventFrozenAmountChanged.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFrozenAmountChangedProtoMsg): EventFrozenAmountChanged {
    return EventFrozenAmountChanged.decode(message.value);
  },
  toProto(message: EventFrozenAmountChanged): Uint8Array {
    return EventFrozenAmountChanged.encode(message).finish();
  },
  toProtoMsg(message: EventFrozenAmountChanged): EventFrozenAmountChangedProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.EventFrozenAmountChanged",
      value: EventFrozenAmountChanged.encode(message).finish()
    };
  }
};
function createBaseEventWhitelistedAmountChanged(): EventWhitelistedAmountChanged {
  return {
    account: "",
    denom: "",
    previousAmount: "",
    currentAmount: ""
  };
}
export const EventWhitelistedAmountChanged = {
  encode(message: EventWhitelistedAmountChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.previousAmount !== "") {
      writer.uint32(26).string(message.previousAmount);
    }
    if (message.currentAmount !== "") {
      writer.uint32(34).string(message.currentAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventWhitelistedAmountChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWhitelistedAmountChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.previousAmount = reader.string();
          break;
        case 4:
          message.currentAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventWhitelistedAmountChanged>): EventWhitelistedAmountChanged {
    const message = createBaseEventWhitelistedAmountChanged();
    message.account = object.account ?? "";
    message.denom = object.denom ?? "";
    message.previousAmount = object.previousAmount ?? "";
    message.currentAmount = object.currentAmount ?? "";
    return message;
  },
  fromAmino(object: EventWhitelistedAmountChangedAmino): EventWhitelistedAmountChanged {
    return {
      account: object.account,
      denom: object.denom,
      previousAmount: object.previous_amount,
      currentAmount: object.current_amount
    };
  },
  toAmino(message: EventWhitelistedAmountChanged): EventWhitelistedAmountChangedAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.denom = message.denom;
    obj.previous_amount = message.previousAmount;
    obj.current_amount = message.currentAmount;
    return obj;
  },
  fromAminoMsg(object: EventWhitelistedAmountChangedAminoMsg): EventWhitelistedAmountChanged {
    return EventWhitelistedAmountChanged.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWhitelistedAmountChangedProtoMsg): EventWhitelistedAmountChanged {
    return EventWhitelistedAmountChanged.decode(message.value);
  },
  toProto(message: EventWhitelistedAmountChanged): Uint8Array {
    return EventWhitelistedAmountChanged.encode(message).finish();
  },
  toProtoMsg(message: EventWhitelistedAmountChanged): EventWhitelistedAmountChangedProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.EventWhitelistedAmountChanged",
      value: EventWhitelistedAmountChanged.encode(message).finish()
    };
  }
};