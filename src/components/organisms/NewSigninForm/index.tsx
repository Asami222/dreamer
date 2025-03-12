import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button2 from "components/atoms/Button2";
import Input from "components/atoms/Input";
import Text from "components/atoms/Text";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";

export type SigninFormData = {
  username: string
  passward: string
}

const StyledText = styled(Text)`
&:hover {
  text-decoration: underline;
  cursor: pointer;
}
`

interface SigninFormProps {
  onSign?: (username: string, passward: string) => void
}

const NewSigninForm = ({ onSign }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>()

  const onSubmit = (data: SigninFormData) => {
    const { username, passward } = data
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onSign && onSign(username,passward)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex $flexDirection="column" $gap="32px">
        <Box>
              <Box $textAlign="center" $marginBottom={3}><StyledText $color="text" $fontSize="medium">ユーザー名・パスワード作成</StyledText></Box>
          <Box $marginBottom={3}>
            <Input
            {...register('username', { required: true})}
            name="username"
            type="text"
            height="72px"
            placeholder="ユーザー名"
            $hasError={!!errors.username}
            $hasBorder
            />
            {errors.username && (
              <Text $color='danger' $fontSize='extraSmall' $paddingLeft={1} $textAlign="center">
              ユーザー名は必須です
              </Text>
            )}
          </Box>
          <Box $marginBottom={3}>
            <Input
            {...register('passward', { required: true})}
            name="passward"
            type="passward"
            height="72px"
            placeholder="パスワード"
            $hasError={!!errors.passward}
            $hasBorder
            />
            {errors.passward && (
              <Text $color='danger' $fontSize='extraSmall' $paddingLeft={1} $textAlign="center">
              パスワードは必須です
              </Text>
            )}
          </Box>
      </Box>
      <Box $margin="0 auto">
        <Button2 type='submit' $selectcolor='Pink'>登録</Button2>
      </Box>
      </Flex>
    </form>
  )
}

export default NewSigninForm