import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { Fragment } from 'react'
import Image from "next/image";
import styled from "styled-components";
//import Button1 from "components/atoms/Button1";
import Text from "components/atoms/Text";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";

interface ModalProps {
  value: boolean
  setValue: React.Dispatch<React.SetStateAction<boolean>>
  imageUrl?: string
  reward?: string
}

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #6B3734;
  background-color: #F7F2F2;
  padding: 2px 24px;
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
const StyledDialogPanel = styled(DialogPanel)`
  width: 100%;
    max-width: 358px;
    overflow: hidden;
    border-radius: 20px;
    background-color: #F7F2F2;
    padding: 32px;
    text-align: center;
    vertical-align: middle;
    box-shadow: 0 2px 4px 0 rgba(177, 88, 82, 0.25);
    outline: 4px dashed #E18883;
    outline-offset: -15px;
    transition-property: all;
    transform: translateX(0);
    transform: translateY(0);
    transform: rotate(0);
    transform: skewX(0);
    transform: skewY(0);
    transform: scaleX(1);
    transform: scaleY(1);
`

const StyledDialogTitle = styled(DialogTitle)`
  font-size: 24px;
    font-weight: 500;
    line-height: 1;
    color: #6B3734;
`

const StyledBox = styled(Box)`
   overflow-y: auto;
`

const StyledFlex = styled(Flex)`
  min-height: 100%;
    text-align: center;
`

const ModalRoot = styled.div`
  .dialog {
    position: relative;
    z-index: 100;
  }
`

const Modal = ({
  value,
  setValue,
  imageUrl,
  reward
}: ModalProps) => {

  const handleClick = () => {
    setValue(false);  //親コンポーネントへのstateの引き渡し
  };

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
            <Box $position='fixed' $inset='0' $backgroundColor='rgba(0,0,0,0.1)'/>
          </TransitionChild>

          <StyledBox $position='fixed' $inset='0' >
            <StyledFlex $alignItems='center' $justifyContent='center' $padding={3}>
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <StyledDialogPanel>
                  <Flex $flexDirection='column' $alignItems='center' $gap="32px">
                    <Flex $flexDirection='column' $alignItems="center">
                      <StyledDialogTitle
                        as="h3"
                      >
                        頑張ったね！
                      </StyledDialogTitle>
                        { imageUrl &&
                          <Box $width="100px" $height="98px" $margin="8px auto 8px" $position='relative'>
                            <Image
                              quality="85"
                              src={imageUrl}
                              alt="ご褒美イメージ"
                              sizes="25.6vw"
                              fill
                              style={{objectFit:"contain"}}
                              objectPosition='50% 50%'
                            />
                          </Box>
                        }
                        <Text $fontSize='large' $color='text2' $fontWeight='500'>{reward}</Text>
                        <Text $fontSize='mediumLarge' $color='text' $fontWeight='500'>をGET!</Text>
                    </Flex>
                    <Box>
                      <StyledButton
                        type="button"
                        onClick={handleClick}
                      >
                      閉じる
                      </StyledButton>
                  </Box>
                  </Flex>
                </StyledDialogPanel>
              </TransitionChild>
            </StyledFlex>
          </StyledBox>
        </Dialog>
      </Transition>
    </ModalRoot>
  )
}

export default Modal

