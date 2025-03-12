import { useForm, Controller} from 'react-hook-form'
import Input from 'components/atoms/Input'
import Text from 'components/atoms/Text'
import TextArea from 'components/atoms/TextArea'
import Flex from 'components/layout/Flex'
import Box from 'components/layout/Box'
import Button2 from 'components/atoms/Button2'
import InputImages, { FileData } from 'components/molecules/InputImages'

export type UserFormData = {
  image?: FileData[]
  name?: string
  dream?: string
  limit?: string
}

interface UserFormProps {
  onSave?: (data: UserFormData) => void
}

const UserForm = ({ onSave }: UserFormProps) => {

  const {
      register,
      handleSubmit,
      control,
    } = useForm<UserFormData>()

    const onSubmit = (data: UserFormData) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onSave && onSave(data)
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex $flexDirection='column' $gap="24px">
          <Flex $flexDirection='column' $gap="8px" $textAlign='center'>
            <Text as='label' $fontSize='medium' $color='text' $fontWeight='400'>プロフィールイメージ画像</Text>
            <Box $margin="0 auto">
            <Controller
              control={control}
              name='image'
              rules={{ required: false }}
              render={({ field: { onChange, value}}) => (
              <InputImages
                images={value ?? []}
                onChange={onChange}
                maximumNumber={1}
                $radius={true}
              />
            )}
            />
            </Box>
          </Flex>
          <Flex $flexDirection='column' $gap="8px" $textAlign='center'>
            <Text as='label' $fontSize='medium' $color='text' $fontWeight='400'>表示名</Text>
            <Input
              {...register('name', { required: false})}
              name='name'
              type='text'
              height='48px'
              placeholder='表示名'
            />
          </Flex>
          <Flex $flexDirection='column' $gap="8px" $textAlign='center'>
            <Text as='label' $fontSize='medium' $color='text' $fontWeight='400'>夢または目標</Text>
            <Controller
            control={control}
            name='dream'
            rules={{ required: false }}
            render={({ field: { onChange, value }}) => (
              <TextArea
              placeholder='夢や目標を記入してください'
              onChange={onChange}
              >
                {value}
              </TextArea>
            )}
            />
          </Flex>
          <Flex $flexDirection='column' $gap="8px" $textAlign='center'>
            <Text as='label' $fontSize='medium' $color='text' $fontWeight='400'>叶える時期</Text>
            <Input
              {...register('limit', { required: false})}
              name='limit'
              type='text'
              height='48px'
              placeholder='やること'
            />
          </Flex>
          <Box $margin="40px auto 32px">
            <Button2
              type='submit'
              $selectcolor='Red'
              >
                変更する
            </Button2>
          </Box>
        </Flex>
      </form>
    )
}

export default UserForm