import Link from "next/link";
//import { useEffect } from "react";
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

const StyledButton = styled.button`
  display: inline-block;
  background-color: rgba(255,255,255,0.3);
  border: 1px solid transparent;
  border-radius: 50px;
  padding: 8px 16px;
  color: ${({theme}) => theme.colors.text};
  font-size: 14px;
  transition:all 0.2s;
  &:hover {
  border: 1px solid ${({theme}) => theme.colors.text};
  cursor: pointer;
  transition:all 0.5s;
}
`

const StyledText = styled(Text)`
&:hover {
  text-decoration: underline;
  cursor: pointer;
}
`

interface SigninFormProps {
  onSign?: (username: string, passward: string) => void
}

const SigninForm = ({ onSign }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SigninFormData>()

  
  const handleClick = () => {
    setValue("username", "test")
    setValue("passward", "111")
  }
  

  const onSubmit = (data: SigninFormData) => {
    const { username, passward } = data
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onSign && onSign(username,passward)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex $flexDirection="column" $gap="24px">
        <Box>
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
          <Box $textAlign="center">
            <StyledText $color="text" $fontSize="medium" as={Link} href={`/signin/new`}>
              新規登録
            </StyledText>
          </Box>
      </Box>
      <Box $margin="0 auto">
        <Button2 type='submit' $selectcolor='Pink'>ログイン</Button2>
      </Box>
      <Box $margin="0 auto">
        <StyledButton onClick={handleClick}>テストユーザーでログイン</StyledButton>
      </Box>
      </Flex>
    </form>
  )
}

export default SigninForm