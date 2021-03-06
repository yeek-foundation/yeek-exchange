import React from "react"
import { Modal } from '../CommonElement'

const SelectAddressModal = (props) => {
  return (
    <Modal
      className={{ base: 'reveal large', afterOpen: 'reveal large' }}
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      contentLabel="Select Address"
      content={
          <div>
              <div class="title">{props.translate(`modal.select_${props.walletType}_address`) || 'Select address'}</div><a class="x" onClick={props.onRequestClose}>&times;</a>
              <div class="address-list-path">
                  {props.content}
              </div>
          </div>

      }
  />
  )
}

export default SelectAddressModal