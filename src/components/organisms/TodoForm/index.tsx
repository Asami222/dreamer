import { useForm, Controller} from 'react-hook-form'
import Button2 from 'components/atoms/Button2'
import Input from 'components/atoms/Input'
import Text from 'components/atoms/Text'
import TextArea from 'components/atoms/TextArea'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import InputImages, { FileData } from 'components/molecules/InputImages'
import { StarRating1 } from 'components/molecules/StarRating'
import { Category } from 'types/data'

const placeholderNameDict: Record<string, string> = {
  '年': '例）20XX年までに',
  '月': '例）3月までに',
  '週': '例）3月XX日までに',
  '日': '例）３日に１回',
  '時間': '例）毎日',
}

const periodNameDict: Record<string, string> = {
  '年': '年',
  '月': 'ヶ月',
  '週': '週間',
  '日': '日',
}

export type TodoFormData = {
  image?: FileData[]
  category: Category
  todo: string
  limit1?: number[]
  limit2?: number[]
  detail?: string
  description?: string
  starNum?: number
}

interface TodoFormProps {
  title: string
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
  onTodoSave?: (data: TodoFormData) => void
}

const TodoForm = ({ onTodoSave, title, value, setValue }: TodoFormProps) => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TodoFormData>()

  const onSubmit = (data: TodoFormData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onTodoSave && onTodoSave(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex $flexDirection='column' $alignItems='center' $gap="32px">
      <Text $fontSize='medium' $color='text' $fontWeight='500'>{title}単位</Text>
      <Flex $flexDirection='column' $gap="24px">
        <Flex $flexDirection='column' $gap="8px">
          <Text as='label' $fontSize='medium' $color='text' $fontWeight='400'>やること</Text>
          <Input
            {...register('todo', { required: true})}
            name='todo'
            type='text'
            height='48px'
            placeholder='やること'
            $hasError={!!errors.todo}
          />
          {errors.todo && (
            <Text $color='danger' $fontSize='extraSmall' $paddingLeft={1}>
              やることを入力してください
            </Text>
          )}
        </Flex>
        <Flex $flexDirection='column' $gap="8px">
          <Text as='label' $fontSize='medium' $color='text' $fontWeight='400'>期限</Text>
          <Flex $flexDirection='column' $gap="4px">
          { title !== '時間' ? ( 
            <Flex $alignItems='center' $gap="8px">
              <Input
              {...register('limit1', {required: false})}
              name='limit1[]'
              type='number'
              height='32px'
              placeholder='1'
              $small
              />
              <Text $fontSize='medium' $color='text' $fontWeight='400'>{periodNameDict[title as string]}</Text>
            </Flex>
            ):(
              <Flex $alignItems='center' $gap="8px">
                <Input
                {...register('limit1', {required: false})}
                name='limit1[]'
                type='number'
                height='32px'
                placeholder='9'
                $small
                />
                <Text $fontSize='medium' $color='text' $fontWeight='400'>時から</Text>
                <Input
                {...register('limit2', {required: false})}
                name='limit2[]'
                type='number'
                height='32px'
                placeholder='12'
                $small
                />
                <Text $fontSize='medium' $color='text' $fontWeight='400'>時まで</Text>
            </Flex>
            )
          }
            <Input
              {...register('detail', { required: false})}
              name='detail'
              type='text'
              height='48px'
              placeholder={placeholderNameDict[title as string]}
            />
          </Flex>
        </Flex>
        <Flex $flexDirection='column' $gap="8px">
          <Text as='label' $fontSize='medium' $color='text' $fontWeight='400'>詳細</Text>
          <Controller
          control={control}
          name='description'
          rules={{ required: false }}
          render={({ field: { onChange, value }}) => (
            <TextArea
            placeholder='詳細'
            onChange={onChange}
            >
              {value}
            </TextArea>
          )}
          />
        </Flex>
        <Flex $flexDirection='column' $gap="8px">
          <Text as='label' $fontSize='medium' $color='text' $fontWeight='400'>イメージ画像</Text>
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
        </Flex>
        <Flex $flexDirection='column' $gap="8px">
          <Text as='label' $fontSize='medium' $color='text' $fontWeight='400'>星の数</Text>
          <Box $margin="0 auto">
            <StarRating1 value={value} setValue={setValue}/>
            <Text as="p" $fontSize='extraSmall' $textAlign='center' $fontWeight='400' $color='text'>*項目ごとに星マークをつけることができます。<br/>
                  やることを完了すると貰えます。<br/>
                  星を集めて頑張った自分にご褒美を上げましょう。<br/>
                  星をクリックして好きな数を設定できます。<br/>
                  最大７つまでです。
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Button2
      type='submit'
      $selectcolor='Red'
      >
        追加する
      </Button2>
      </Flex>
    </form>
  )
}

export default TodoForm

