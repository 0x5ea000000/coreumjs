//@ts-nocheck
import { MsgIssue, MsgMint, MsgBurn, MsgFreeze, MsgUnfreeze, MsgGloballyFreeze, MsgGloballyUnfreeze, MsgSetWhitelistedLimit, MsgUpgradeTokenV1 } from "./tx";
export const AminoConverter = {
  "/coreum.asset.ft.v1.MsgIssue": {
    aminoType: "/coreum.asset.ft.v1.MsgIssue",
    toAmino: MsgIssue.toAmino,
    fromAmino: MsgIssue.fromAmino
  },
  "/coreum.asset.ft.v1.MsgMint": {
    aminoType: "/coreum.asset.ft.v1.MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/coreum.asset.ft.v1.MsgBurn": {
    aminoType: "/coreum.asset.ft.v1.MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/coreum.asset.ft.v1.MsgFreeze": {
    aminoType: "/coreum.asset.ft.v1.MsgFreeze",
    toAmino: MsgFreeze.toAmino,
    fromAmino: MsgFreeze.fromAmino
  },
  "/coreum.asset.ft.v1.MsgUnfreeze": {
    aminoType: "/coreum.asset.ft.v1.MsgUnfreeze",
    toAmino: MsgUnfreeze.toAmino,
    fromAmino: MsgUnfreeze.fromAmino
  },
  "/coreum.asset.ft.v1.MsgGloballyFreeze": {
    aminoType: "/coreum.asset.ft.v1.MsgGloballyFreeze",
    toAmino: MsgGloballyFreeze.toAmino,
    fromAmino: MsgGloballyFreeze.fromAmino
  },
  "/coreum.asset.ft.v1.MsgGloballyUnfreeze": {
    aminoType: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
    toAmino: MsgGloballyUnfreeze.toAmino,
    fromAmino: MsgGloballyUnfreeze.fromAmino
  },
  "/coreum.asset.ft.v1.MsgSetWhitelistedLimit": {
    aminoType: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit",
    toAmino: MsgSetWhitelistedLimit.toAmino,
    fromAmino: MsgSetWhitelistedLimit.fromAmino
  },
  "/coreum.asset.ft.v1.MsgUpgradeTokenV1": {
    aminoType: "/coreum.asset.ft.v1.MsgUpgradeTokenV1",
    toAmino: MsgUpgradeTokenV1.toAmino,
    fromAmino: MsgUpgradeTokenV1.fromAmino
  }
};