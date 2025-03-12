import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useTimeoutFn } from 'react-use'
import { useForm, Controller } from 'react-hook-form'
import styled, { css } from 'styled-components'
import Input from 'components/atoms/Input'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import InputImages, { FileData } from 'components/molecules/InputImages'
import { StarIcon } from 'components/atoms/IconButton'

const PanelRoot = styled.div`
  margin: 32px auto;
  width: 110px;
  height: 30px;
  .item {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: #F7F2F2;
    box-shadow: 0 2px 4px 0 rgba(177, 88, 82, 0.25);
  }
`

const StyledButton = styled.button<{ $hasError?: boolean }>`
  ${({ $hasError }) => {
  if ($hasError) {
    return css`
      color: #ed1c24;
      border-bottom: none;
    `
  } else {
    return css`
      color: #6B3734;
      border-bottom: 1px solid #6B3734;
    `
  }
  }}
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.colors.text};
  color: ${({theme}) => (theme.colors.text)};
  font-size: 16px;
  background: none;
  cursor: pointer;
  &:hover {
   color: ${({theme}) => (theme.colors.checkbox)};
   border-bottom: 1px solid ${({theme}) => theme.colors.checkbox};
  }
`

export type RewardFormData = {
  image?: FileData[]
  reward: string
  starNum: number
}

interface RewardFormProps {
  onRewardSave?: (data: RewardFormData) => void
}

const RewardForm = ({ onRewardSave }: RewardFormProps) => {

  const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm<RewardFormData>()
  
    const onSubmit = (data: RewardFormData) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onRewardSave && onRewardSave(data)
    }

    const [isShowing, setIsShowing] = useState(false)
    const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(false), 1500)

    return (
      <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex $flexDirection='column' $alignItems='center' $gap="8px">
          <Flex $alignItems='center' $gap="24px">
            <Box>
            <Controller
            control={control}
            name='image'
            rules={{ required: false }}
            render={({ field: { onChange, value}}) => (
              <InputImages
                images={value ?? []}
                onChange={onChange}
                maximumNumber={1}
              />
            )}
            />
            </Box>
            <Flex $flexDirection='column' $gap="8px">
                <Input
                  {...register('reward', { required: true})}
                  name='reward'
                  height='28px'
                  type='text'
                  placeholder="テディベア"
                  $hasError={!!errors.reward}
                />
              <Flex $gap="8px" $alignItems='center'>
                <StarIcon size={32} color="starLight"/>
                <Input
                  {...register('starNum', {required: true})}
                  name='starNum'
                  height='32px'
                  type='number'
                  placeholder='100'
                  $small
                  $hasError={!!errors.starNum}
                />
                <Text $fontSize="small" $color="text">個と交換</Text>
              </Flex>
            </Flex>
          </Flex>
          {errors.reward && (
            <Text $color='danger' $fontSize='extraSmall'>
              ご褒美を入力してください
            </Text>
          )}
          {errors.starNum && (
            <Text $color='danger' $fontSize='extraSmall'>
              星の数を入力してください
            </Text>
          )}
          <StyledButton 
            type='submit' 
            $hasError={!!errors}
            onClick={() => {
              setIsShowing(true)
              resetIsShowing()
            }}
          >
            追加する
          </StyledButton>
        </Flex>
      </form>
      <PanelRoot>
      <Transition
        as={Fragment}
        show={isShowing}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <Box className="item" $textAlign='center'><Text $fontSize='extraSmall' $fontWeight='500' $color='text2' $lineHeight="30px">追加しました！</Text></Box>
      </Transition>
    </PanelRoot>
    </>
  )
}

export default RewardForm