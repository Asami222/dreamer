import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import Button1 from "components/atoms/Button1";
import Text from "components/atoms/Text";
import TextArea from "components/atoms/TextArea";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import { KeyboardDoubleArrowRightIcon } from "components/atoms/IconButton";
//import type { User } from "types/data";

export type NewDreamFormData = {
  dream: string
  limit: string
}

const StyledText = styled(Text)`
vertical-align: top;
&:hover {
  text-decoration: underline;
  cursor: pointer;
}
`
interface NewDreamFormProps {
  onSave?: (data: NewDreamFormData) => void
}

const NewDreamForm = ({ onSave }: NewDreamFormProps) => {
  const {
    handleSubmit,
    control,
  } = useForm<NewDreamFormData>()

  const onSubmit = (data: NewDreamFormData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onSave && onSave(data)
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex $flexDirection="column" $gap="8px">
        <Box $margin="0 auto">
          <Text as='label' $fontSize='medium' $color='text' $fontWeight='500'>
            あなたの夢は何ですか
          </Text>
        </Box>
        <Controller
            control={control}
            name='dream'
            rules={{ required: false }}
            render={({ field: { onChange, value }}) => (
              <TextArea
              rows={10}
              minRows={10}
              placeholder={ '夢を記入してください。未記入でも可能です。'}
              onChange={onChange}
              $hasBorder
              >
                {value}
              </TextArea>
            )}
        />
        <Box $margin="24px auto 0">
          <Text as='label' $fontSize='medium' $color='text' $fontWeight='500'>
           それをいつまでに叶えたいですか？
          </Text>
        </Box>
        <Controller
            control={control}
            name='limit'
            rules={{ required: false }}
            render={({ field: { onChange, value }}) => (
              <TextArea
              rows={10}
              minRows={10}
              placeholder={ '期限を記入してください。未記入でも可能です。'}
              onChange={onChange}
              $hasBorder
              >
                {value}
              </TextArea>
            )}
        />
        <Flex $gap="24px" $alignSelf="center" $margin="24px 0" $alignItems="center">
          <Button1 type='submit' $selectColor='Pink' $padding="4px 20px">登録する</Button1>
          <Flex $justifyItems="flex-start">
            <StyledText $fontSize="extraSmall" $fontWeight="500" $color="text" as="a" href={'/newTodo'}>
              あとで・・・
            </StyledText>
            <KeyboardDoubleArrowRightIcon size={20} color='text'/>
            </Flex>
        </Flex>
      </Flex>
    </form>
  )
}

export default NewDreamForm