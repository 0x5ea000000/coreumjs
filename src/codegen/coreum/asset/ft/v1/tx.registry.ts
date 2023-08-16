//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIssue, MsgMint, MsgBurn, MsgFreeze, MsgUnfreeze, MsgGloballyFreeze, MsgGloballyUnfreeze, MsgSetWhitelistedLimit, MsgUpgradeTokenV1 } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/coreum.asset.ft.v1.MsgIssue", MsgIssue], ["/coreum.asset.ft.v1.MsgMint", MsgMint], ["/coreum.asset.ft.v1.MsgBurn", MsgBurn], ["/coreum.asset.ft.v1.MsgFreeze", MsgFreeze], ["/coreum.asset.ft.v1.MsgUnfreeze", MsgUnfreeze], ["/coreum.asset.ft.v1.MsgGloballyFreeze", MsgGloballyFreeze], ["/coreum.asset.ft.v1.MsgGloballyUnfreeze", MsgGloballyUnfreeze], ["/coreum.asset.ft.v1.MsgSetWhitelistedLimit", MsgSetWhitelistedLimit], ["/coreum.asset.ft.v1.MsgUpgradeTokenV1", MsgUpgradeTokenV1]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    issue(value: MsgIssue) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgIssue",
        value: MsgIssue.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    freeze(value: MsgFreeze) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgFreeze",
        value: MsgFreeze.encode(value).finish()
      };
    },
    unfreeze(value: MsgUnfreeze) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze",
        value: MsgUnfreeze.encode(value).finish()
      };
    },
    globallyFreeze(value: MsgGloballyFreeze) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze",
        value: MsgGloballyFreeze.encode(value).finish()
      };
    },
    globallyUnfreeze(value: MsgGloballyUnfreeze) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
        value: MsgGloballyUnfreeze.encode(value).finish()
      };
    },
    setWhitelistedLimit(value: MsgSetWhitelistedLimit) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit",
        value: MsgSetWhitelistedLimit.encode(value).finish()
      };
    },
    upgradeTokenV1(value: MsgUpgradeTokenV1) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgUpgradeTokenV1",
        value: MsgUpgradeTokenV1.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    issue(value: MsgIssue) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgIssue",
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgMint",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgBurn",
        value
      };
    },
    freeze(value: MsgFreeze) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgFreeze",
        value
      };
    },
    unfreeze(value: MsgUnfreeze) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze",
        value
      };
    },
    globallyFreeze(value: MsgGloballyFreeze) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze",
        value
      };
    },
    globallyUnfreeze(value: MsgGloballyUnfreeze) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
        value
      };
    },
    setWhitelistedLimit(value: MsgSetWhitelistedLimit) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit",
        value
      };
    },
    upgradeTokenV1(value: MsgUpgradeTokenV1) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgUpgradeTokenV1",
        value
      };
    }
  },
  fromPartial: {
    issue(value: MsgIssue) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgIssue",
        value: MsgIssue.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    freeze(value: MsgFreeze) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgFreeze",
        value: MsgFreeze.fromPartial(value)
      };
    },
    unfreeze(value: MsgUnfreeze) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze",
        value: MsgUnfreeze.fromPartial(value)
      };
    },
    globallyFreeze(value: MsgGloballyFreeze) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze",
        value: MsgGloballyFreeze.fromPartial(value)
      };
    },
    globallyUnfreeze(value: MsgGloballyUnfreeze) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
        value: MsgGloballyUnfreeze.fromPartial(value)
      };
    },
    setWhitelistedLimit(value: MsgSetWhitelistedLimit) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit",
        value: MsgSetWhitelistedLimit.fromPartial(value)
      };
    },
    upgradeTokenV1(value: MsgUpgradeTokenV1) {
      return {
        typeUrl: "/coreum.asset.ft.v1.MsgUpgradeTokenV1",
        value: MsgUpgradeTokenV1.fromPartial(value)
      };
    }
  }
};