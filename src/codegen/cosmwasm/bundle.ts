import * as _69 from "./wasm/v1/authz";
import * as _70 from "./wasm/v1/genesis";
import * as _71 from "./wasm/v1/ibc";
import * as _72 from "./wasm/v1/proposal";
import * as _73 from "./wasm/v1/query";
import * as _74 from "./wasm/v1/tx";
import * as _75 from "./wasm/v1/types";
import * as _135 from "./wasm/v1/tx.amino";
import * as _136 from "./wasm/v1/tx.registry";
import * as _137 from "./wasm/v1/query.rpc.Query";
import * as _138 from "./wasm/v1/tx.rpc.msg";
import * as _143 from "./rpc.query";
import * as _144 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._135,
      ..._136,
      ..._137,
      ..._138
    };
  }
  export const ClientFactory = {
    ..._143,
    ..._144
  };
}