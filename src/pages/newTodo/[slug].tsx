import type { NextPage } from 'next'
//import Box from 'components/layout/Box'
//import Flex from 'components/layout/Flex'
import Layout from 'components/templates/Layout'
import Box from 'components/layout/Box'
import TodoFormContainer from 'containers/TodoFormContainer'
import { useAuthContext } from 'contexts/AuthContext'
import { useAuthGuard } from 'utils/hooks'
import type { Category2 } from 'types/data'
import { useRouter } from 'next/router'
/*
const categoryNameDict: Record<Category, string> = {
  year: '年',
  month: '月',
  week: '週',
  day: '日',
  time: '時間',
}
*/
const AddTodoPage: NextPage = () => {
  const router = useRouter()
  const slug: Category2 = router.query.slug as Category2
  const { authUser } = useAuthContext()
  useAuthGuard()
 
  const handleSave = (err?: Error) => {
    if(authUser && !err) {
      router.push(`/users/${authUser.id}`)
    } 
  }

  return (
    <Layout>
      <Box $marginTop={4} $marginBottom="80px">
        <TodoFormContainer onSave={handleSave} category={slug}/>
      </Box>
    </Layout>
  )
}

export default AddTodoPage



