import React from "react"
import MyAlgo from "@randlabs/myalgo-connect"
import { Connector, ConnectorType, SvgProps } from "../../types"

export class MyAlgoWallet implements Connector {
  public id = "myalgowallet"
  public name = "MyAlgoWallet"

  public type = ConnectorType.qrcode
  private myAlgoWallet: MyAlgo

  constructor() {
    this.myAlgoWallet = new MyAlgo()
  }

  logo(svgProps: SvgProps) {
    return (
      <svg {...svgProps} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 30A15 15 0 0 1 4.392 4.393 15 15 0 1 1 25.6 25.606 14.9 14.9 0 0 1 15 30zm3.991-19.508l.122.468 2.459 8.91h2L20.214 8.314 20.132 8h-1.745l-.04.063-1.633 2.9-1.674 2.974-.04.071-.019-.071-.2-.764-.571-2.21-.061-.22-.633-2.429L13.43 8h-1.745l-.041.063-1.633 2.9-1.673 2.974L6.673 16.9 5 19.873h2L8.674 16.9l1.674-2.963 1.663-2.974.275-.471.122.471.51 1.958.634 2.439.22.832-.4.707-1.672 2.974h2l.707-1.255 1.228-2.179 1.414-2.5 1.663-2.974.274-.469z"
          data-name="Subtraction 11"
          fill="#245ec7"
          id="prefix__Subtraction_11"
          transform="translate(.002)"
        />
      </svg>
    )
  }

  provider() {
    return this.myAlgoWallet
  }

  connect() {
    return this.myAlgoWallet.connect()
  }

  check() {
    return false
  }
}
