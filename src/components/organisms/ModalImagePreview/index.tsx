import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react';
import { Fragment } from 'react'
import styled from "styled-components";
//import Button1 from "components/atoms/Button1";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import InputImages, { FileData } from 'components/molecules/InputImages';

interface ModalProps {
  value?: boolean
  src?: string
  onRemove?: (src: string) => void
}

const ModalRoot = styled.div`
  .dialog {
    position: relative;
    z-index: 10;
  }
  .back {
    overflow-y: auto;
  }
  .contents {
    min-height: 100%;
    text-align: center;
  }
  .dialog-panel {
    width: 100%;
    max-width: 358px;
    overflow: hidden;
    border-radius: 20px;
    background-color: #F7F2F2;
    padding: 32px;
    text-align: center;
    vertical-align: middle;
    box-shadow: 0 2px 4px 0 rgba(177, 88, 82, 0.25);
    outline: 8px dashed #E18883;
    outline-offset: -15px;
    transition-property: all;
    transform: translateX(0);
    transform: translateY(0);
    transform: rotate(0);
    transform: skewX(0);
    transform: skewY(0);
    transform: scaleX(1);
    transform: scaleY(1);
  }
  .dialog-title {
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    color: #6B3734;
  }
  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #6B3734;
    background-color: none;
    padding: 4px 24px;
    font-size: 14px;
    font-weight: 500;
    color: #6B3734;
    &:hover {
      background-color: #F3E4E3;
    }
    &:focus {
      outline: none;
    }
  }
`

const ModalImagePreview = ({
  value,
  src,
  onRemove
}: ModalProps) => {

  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onRemove && src && onRemove(src)

    return false
  }

  const [images, setImages] = useState<FileData[]>([])

  const handleChange = (images: FileData[]) => {
    setImages(images)
  }

  return (
    <ModalRoot>
      <Transition appear show={value} as={Fragment}>
        <Dialog as="div" className="dialog" onClose={handleClick}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Box $position='fixed' $inset='0' className="back" $backgroundColor='rgba(0,0,0,0.1)'/>
          </TransitionChild>

          <Box className="back" $position='fixed' $inset='0' >
            <Flex $alignItems='center' $justifyContent='center' $padding={3} className="contents">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="dialog-panel">
                  <Flex $flexDirection='column' $alignItems='center' $gap="32px">
                      <Flex $flexDirection='column' $alignItems="center" >
                        <DialogTitle
                          as="h3"
                          className="dialog-title"
                        >
                          イメージ
                        </DialogTitle>
                        <InputImages images={images} onChange={handleChange} maximumNumber={2}/>
                      </Flex>
                      <Box>
                        <button
                          type="button"
                          className="button"
                          onClick={handleClick}
                        >
                        閉じる
                        </button>
                    </Box>
                  </Flex>
                </DialogPanel>
              </TransitionChild>
            </Flex>
          </Box>
        </Dialog>
      </Transition>
    </ModalRoot>
  )
}

export default ModalImagePreview

