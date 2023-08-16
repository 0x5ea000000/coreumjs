import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Token, TokenAmino, TokenSDKType } from "./token";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** GenesisState defines the module genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  /** tokens keep the fungible token state */
  tokens: Token[];
  /** frozen_balances contains the frozen balances on all of the accounts */
  frozenBalances: Balance[];
  /** whitelisted_balances contains the whitelisted balances on all of the accounts */
  whitelistedBalances: Balance[];
  /** pending_token_upgrades contains pending token upgrades. */
  pendingTokenUpgrades: PendingTokenUpgrade[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the module genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  /** tokens keep the fungible token state */
  tokens: TokenAmino[];
  /** frozen_balances contains the frozen balances on all of the accounts */
  frozen_balances: BalanceAmino[];
  /** whitelisted_balances contains the whitelisted balances on all of the accounts */
  whitelisted_balances: BalanceAmino[];
  /** pending_token_upgrades contains pending token upgrades. */
  pending_token_upgrades: PendingTokenUpgradeAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/coreum.asset.ft.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the module genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  tokens: TokenSDKType[];
  frozen_balances: BalanceSDKType[];
  whitelisted_balances: BalanceSDKType[];
  pending_token_upgrades: PendingTokenUpgradeSDKType[];
}
/** Balance defines an account address and balance pair used module genesis genesis state. */
export interface Balance {
  /** address is the address of the balance holder. */
  address: string;
  /** coins defines the different coins this balance holds. */
  coins: Coin[];
}
export interface BalanceProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.Balance";
  value: Uint8Array;
}
/** Balance defines an account address and balance pair used module genesis genesis state. */
export interface BalanceAmino {
  /** address is the address of the balance holder. */
  address: string;
  /** coins defines the different coins this balance holds. */
  coins: CoinAmino[];
}
export interface BalanceAminoMsg {
  type: "/coreum.asset.ft.v1.Balance";
  value: BalanceAmino;
}
/** Balance defines an account address and balance pair used module genesis genesis state. */
export interface BalanceSDKType {
  address: string;
  coins: CoinSDKType[];
}
/** PendingTokenUpgrade stores the version of pending token upgrade. */
export interface PendingTokenUpgrade {
  denom: string;
  version: number;
}
export interface PendingTokenUpgradeProtoMsg {
  typeUrl: "/coreum.asset.ft.v1.PendingTokenUpgrade";
  value: Uint8Array;
}
/** PendingTokenUpgrade stores the version of pending token upgrade. */
export interface PendingTokenUpgradeAmino {
  denom: string;
  version: number;
}
export interface PendingTokenUpgradeAminoMsg {
  type: "/coreum.asset.ft.v1.PendingTokenUpgrade";
  value: PendingTokenUpgradeAmino;
}
/** PendingTokenUpgrade stores the version of pending token upgrade. */
export interface PendingTokenUpgradeSDKType {
  denom: string;
  version: number;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tokens: [],
    frozenBalances: [],
    whitelistedBalances: [],
    pendingTokenUpgrades: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.frozenBalances) {
      Balance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.whitelistedBalances) {
      Balance.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.pendingTokenUpgrades) {
      PendingTokenUpgrade.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokens.push(Token.decode(reader, reader.uint32()));
          break;
        case 3:
          message.frozenBalances.push(Balance.decode(reader, reader.uint32()));
          break;
        case 4:
          message.whitelistedBalances.push(Balance.decode(reader, reader.uint32()));
          break;
        case 5:
          message.pendingTokenUpgrades.push(PendingTokenUpgrade.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokens = object.tokens?.map(e => Token.fromPartial(e)) || [];
    message.frozenBalances = object.frozenBalances?.map(e => Balance.fromPartial(e)) || [];
    message.whitelistedBalances = object.whitelistedBalances?.map(e => Balance.fromPartial(e)) || [];
    message.pendingTokenUpgrades = object.pendingTokenUpgrades?.map(e => PendingTokenUpgrade.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Token.fromAmino(e)) : [],
      frozenBalances: Array.isArray(object?.frozen_balances) ? object.frozen_balances.map((e: any) => Balance.fromAmino(e)) : [],
      whitelistedBalances: Array.isArray(object?.whitelisted_balances) ? object.whitelisted_balances.map((e: any) => Balance.fromAmino(e)) : [],
      pendingTokenUpgrades: Array.isArray(object?.pending_token_upgrades) ? object.pending_token_upgrades.map((e: any) => PendingTokenUpgrade.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.tokens = [];
    }
    if (message.frozenBalances) {
      obj.frozen_balances = message.frozenBalances.map(e => e ? Balance.toAmino(e) : undefined);
    } else {
      obj.frozen_balances = [];
    }
    if (message.whitelistedBalances) {
      obj.whitelisted_balances = message.whitelistedBalances.map(e => e ? Balance.toAmino(e) : undefined);
    } else {
      obj.whitelisted_balances = [];
    }
    if (message.pendingTokenUpgrades) {
      obj.pending_token_upgrades = message.pendingTokenUpgrades.map(e => e ? PendingTokenUpgrade.toAmino(e) : undefined);
    } else {
      obj.pending_token_upgrades = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseBalance(): Balance {
  return {
    address: "",
    coins: []
  };
}
export const Balance = {
  encode(message: Balance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Balance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Balance>): Balance {
    const message = createBaseBalance();
    message.address = object.address ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BalanceAmino): Balance {
    return {
      address: object.address,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Balance): BalanceAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: BalanceAminoMsg): Balance {
    return Balance.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceProtoMsg): Balance {
    return Balance.decode(message.value);
  },
  toProto(message: Balance): Uint8Array {
    return Balance.encode(message).finish();
  },
  toProtoMsg(message: Balance): BalanceProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.Balance",
      value: Balance.encode(message).finish()
    };
  }
};
function createBasePendingTokenUpgrade(): PendingTokenUpgrade {
  return {
    denom: "",
    version: 0
  };
}
export const PendingTokenUpgrade = {
  encode(message: PendingTokenUpgrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.version !== 0) {
      writer.uint32(16).uint32(message.version);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PendingTokenUpgrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingTokenUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PendingTokenUpgrade>): PendingTokenUpgrade {
    const message = createBasePendingTokenUpgrade();
    message.denom = object.denom ?? "";
    message.version = object.version ?? 0;
    return message;
  },
  fromAmino(object: PendingTokenUpgradeAmino): PendingTokenUpgrade {
    return {
      denom: object.denom,
      version: object.version
    };
  },
  toAmino(message: PendingTokenUpgrade): PendingTokenUpgradeAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.version = message.version;
    return obj;
  },
  fromAminoMsg(object: PendingTokenUpgradeAminoMsg): PendingTokenUpgrade {
    return PendingTokenUpgrade.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingTokenUpgradeProtoMsg): PendingTokenUpgrade {
    return PendingTokenUpgrade.decode(message.value);
  },
  toProto(message: PendingTokenUpgrade): Uint8Array {
    return PendingTokenUpgrade.encode(message).finish();
  },
  toProtoMsg(message: PendingTokenUpgrade): PendingTokenUpgradeProtoMsg {
    return {
      typeUrl: "/coreum.asset.ft.v1.PendingTokenUpgrade",
      value: PendingTokenUpgrade.encode(message).finish()
    };
  }
};