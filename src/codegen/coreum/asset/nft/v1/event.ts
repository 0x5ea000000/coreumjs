import { ClassFeature, classFeatureFromJSON, classFeatureToJSON } from "./nft";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** EventClassIssued is emitted on MsgIssueClass. */
export interface EventClassIssued {
  id: string;
  issuer: string;
  symbol: string;
  name: string;
  description: string;
  uri: string;
  uriHash: string;
  features: ClassFeature[];
  royaltyRate: string;
}
export interface EventClassIssuedProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventClassIssued";
  value: Uint8Array;
}
/** EventClassIssued is emitted on MsgIssueClass. */
export interface EventClassIssuedAmino {
  id: string;
  issuer: string;
  symbol: string;
  name: string;
  description: string;
  uri: string;
  uri_hash: string;
  features: ClassFeature[];
  royalty_rate: string;
}
export interface EventClassIssuedAminoMsg {
  type: "/coreum.asset.nft.v1.EventClassIssued";
  value: EventClassIssuedAmino;
}
/** EventClassIssued is emitted on MsgIssueClass. */
export interface EventClassIssuedSDKType {
  id: string;
  issuer: string;
  symbol: string;
  name: string;
  description: string;
  uri: string;
  uri_hash: string;
  features: ClassFeature[];
  royalty_rate: string;
}
export interface EventFrozen {
  classId: string;
  id: string;
  owner: string;
}
export interface EventFrozenProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventFrozen";
  value: Uint8Array;
}
export interface EventFrozenAmino {
  class_id: string;
  id: string;
  owner: string;
}
export interface EventFrozenAminoMsg {
  type: "/coreum.asset.nft.v1.EventFrozen";
  value: EventFrozenAmino;
}
export interface EventFrozenSDKType {
  class_id: string;
  id: string;
  owner: string;
}
export interface EventUnfrozen {
  classId: string;
  id: string;
  owner: string;
}
export interface EventUnfrozenProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventUnfrozen";
  value: Uint8Array;
}
export interface EventUnfrozenAmino {
  class_id: string;
  id: string;
  owner: string;
}
export interface EventUnfrozenAminoMsg {
  type: "/coreum.asset.nft.v1.EventUnfrozen";
  value: EventUnfrozenAmino;
}
export interface EventUnfrozenSDKType {
  class_id: string;
  id: string;
  owner: string;
}
export interface EventAddedToWhitelist {
  classId: string;
  id: string;
  account: string;
}
export interface EventAddedToWhitelistProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventAddedToWhitelist";
  value: Uint8Array;
}
export interface EventAddedToWhitelistAmino {
  class_id: string;
  id: string;
  account: string;
}
export interface EventAddedToWhitelistAminoMsg {
  type: "/coreum.asset.nft.v1.EventAddedToWhitelist";
  value: EventAddedToWhitelistAmino;
}
export interface EventAddedToWhitelistSDKType {
  class_id: string;
  id: string;
  account: string;
}
export interface EventRemovedFromWhitelist {
  classId: string;
  id: string;
  account: string;
}
export interface EventRemovedFromWhitelistProtoMsg {
  typeUrl: "/coreum.asset.nft.v1.EventRemovedFromWhitelist";
  value: Uint8Array;
}
export interface EventRemovedFromWhitelistAmino {
  class_id: string;
  id: string;
  account: string;
}
export interface EventRemovedFromWhitelistAminoMsg {
  type: "/coreum.asset.nft.v1.EventRemovedFromWhitelist";
  value: EventRemovedFromWhitelistAmino;
}
export interface EventRemovedFromWhitelistSDKType {
  class_id: string;
  id: string;
  account: string;
}
function createBaseEventClassIssued(): EventClassIssued {
  return {
    id: "",
    issuer: "",
    symbol: "",
    name: "",
    description: "",
    uri: "",
    uriHash: "",
    features: [],
    royaltyRate: ""
  };
}
export const EventClassIssued = {
  encode(message: EventClassIssued, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(50).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(58).string(message.uriHash);
    }
    writer.uint32(66).fork();
    for (const v of message.features) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.royaltyRate !== "") {
      writer.uint32(74).string(message.royaltyRate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventClassIssued {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClassIssued();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.uri = reader.string();
          break;
        case 7:
          message.uriHash = reader.string();
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
          message.royaltyRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventClassIssued>): EventClassIssued {
    const message = createBaseEventClassIssued();
    message.id = object.id ?? "";
    message.issuer = object.issuer ?? "";
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.features = object.features?.map(e => e) || [];
    message.royaltyRate = object.royaltyRate ?? "";
    return message;
  },
  fromAmino(object: EventClassIssuedAmino): EventClassIssued {
    return {
      id: object.id,
      issuer: object.issuer,
      symbol: object.symbol,
      name: object.name,
      description: object.description,
      uri: object.uri,
      uriHash: object.uri_hash,
      features: Array.isArray(object?.features) ? object.features.map((e: any) => classFeatureFromJSON(e)) : [],
      royaltyRate: object.royalty_rate
    };
  },
  toAmino(message: EventClassIssued): EventClassIssuedAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.issuer = message.issuer;
    obj.symbol = message.symbol;
    obj.name = message.name;
    obj.description = message.description;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    if (message.features) {
      obj.features = message.features.map(e => classFeatureToJSON(e));
    } else {
      obj.features = [];
    }
    obj.royalty_rate = message.royaltyRate;
    return obj;
  },
  fromAminoMsg(object: EventClassIssuedAminoMsg): EventClassIssued {
    return EventClassIssued.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClassIssuedProtoMsg): EventClassIssued {
    return EventClassIssued.decode(message.value);
  },
  toProto(message: EventClassIssued): Uint8Array {
    return EventClassIssued.encode(message).finish();
  },
  toProtoMsg(message: EventClassIssued): EventClassIssuedProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventClassIssued",
      value: EventClassIssued.encode(message).finish()
    };
  }
};
function createBaseEventFrozen(): EventFrozen {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
export const EventFrozen = {
  encode(message: EventFrozen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventFrozen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFrozen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventFrozen>): EventFrozen {
    const message = createBaseEventFrozen();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventFrozenAmino): EventFrozen {
    return {
      classId: object.class_id,
      id: object.id,
      owner: object.owner
    };
  },
  toAmino(message: EventFrozen): EventFrozenAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: EventFrozenAminoMsg): EventFrozen {
    return EventFrozen.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFrozenProtoMsg): EventFrozen {
    return EventFrozen.decode(message.value);
  },
  toProto(message: EventFrozen): Uint8Array {
    return EventFrozen.encode(message).finish();
  },
  toProtoMsg(message: EventFrozen): EventFrozenProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventFrozen",
      value: EventFrozen.encode(message).finish()
    };
  }
};
function createBaseEventUnfrozen(): EventUnfrozen {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
export const EventUnfrozen = {
  encode(message: EventUnfrozen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUnfrozen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnfrozen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventUnfrozen>): EventUnfrozen {
    const message = createBaseEventUnfrozen();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventUnfrozenAmino): EventUnfrozen {
    return {
      classId: object.class_id,
      id: object.id,
      owner: object.owner
    };
  },
  toAmino(message: EventUnfrozen): EventUnfrozenAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: EventUnfrozenAminoMsg): EventUnfrozen {
    return EventUnfrozen.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUnfrozenProtoMsg): EventUnfrozen {
    return EventUnfrozen.decode(message.value);
  },
  toProto(message: EventUnfrozen): Uint8Array {
    return EventUnfrozen.encode(message).finish();
  },
  toProtoMsg(message: EventUnfrozen): EventUnfrozenProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventUnfrozen",
      value: EventUnfrozen.encode(message).finish()
    };
  }
};
function createBaseEventAddedToWhitelist(): EventAddedToWhitelist {
  return {
    classId: "",
    id: "",
    account: ""
  };
}
export const EventAddedToWhitelist = {
  encode(message: EventAddedToWhitelist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventAddedToWhitelist {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddedToWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAddedToWhitelist>): EventAddedToWhitelist {
    const message = createBaseEventAddedToWhitelist();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: EventAddedToWhitelistAmino): EventAddedToWhitelist {
    return {
      classId: object.class_id,
      id: object.id,
      account: object.account
    };
  },
  toAmino(message: EventAddedToWhitelist): EventAddedToWhitelistAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: EventAddedToWhitelistAminoMsg): EventAddedToWhitelist {
    return EventAddedToWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAddedToWhitelistProtoMsg): EventAddedToWhitelist {
    return EventAddedToWhitelist.decode(message.value);
  },
  toProto(message: EventAddedToWhitelist): Uint8Array {
    return EventAddedToWhitelist.encode(message).finish();
  },
  toProtoMsg(message: EventAddedToWhitelist): EventAddedToWhitelistProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventAddedToWhitelist",
      value: EventAddedToWhitelist.encode(message).finish()
    };
  }
};
function createBaseEventRemovedFromWhitelist(): EventRemovedFromWhitelist {
  return {
    classId: "",
    id: "",
    account: ""
  };
}
export const EventRemovedFromWhitelist = {
  encode(message: EventRemovedFromWhitelist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemovedFromWhitelist {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemovedFromWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventRemovedFromWhitelist>): EventRemovedFromWhitelist {
    const message = createBaseEventRemovedFromWhitelist();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: EventRemovedFromWhitelistAmino): EventRemovedFromWhitelist {
    return {
      classId: object.class_id,
      id: object.id,
      account: object.account
    };
  },
  toAmino(message: EventRemovedFromWhitelist): EventRemovedFromWhitelistAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: EventRemovedFromWhitelistAminoMsg): EventRemovedFromWhitelist {
    return EventRemovedFromWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemovedFromWhitelistProtoMsg): EventRemovedFromWhitelist {
    return EventRemovedFromWhitelist.decode(message.value);
  },
  toProto(message: EventRemovedFromWhitelist): Uint8Array {
    return EventRemovedFromWhitelist.encode(message).finish();
  },
  toProtoMsg(message: EventRemovedFromWhitelist): EventRemovedFromWhitelistProtoMsg {
    return {
      typeUrl: "/coreum.asset.nft.v1.EventRemovedFromWhitelist",
      value: EventRemovedFromWhitelist.encode(message).finish()
    };
  }
};