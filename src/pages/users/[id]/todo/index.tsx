import { useEffect } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import getAllTodos from 'services/todos/get-all-todos'
import type { ApiContext, Category, Todo } from 'types/data'
import UserTodoListContainer from 'containers/UserTodoListContainer'
import getUser from 'services/users/get-user'
import getAllUsers from 'services/users/get-all-users'
import styled from "styled-components";
import Layout from 'components/templates/Layout'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import { Fragment } from 'react';
import Separator from 'components/atoms/Separator'
import { classNames } from 'lib/class-names';
import { useMyTodosContext } from "contexts/TodoContext"
//import { useRouter } from 'next/router'


type TodoYearProps = InferGetStaticPropsType<typeof getStaticProps>

interface Categories {
 label: string
 category: Category
}

const categories: Categories[] = [
  {
    label: 'すべて',
    category: 'all'
  },
  {
    label: '年',
    category: 'year'
  },
  {
    label: '月',
    category: 'month'
  },
  {
    label: '週',
    category: 'week'
  },
  {
    label: '日',
    category: 'day'
  },
  {
    label: '時間',
    category: 'time'
  }
]

const TodoRoot = styled.div`
width: 100%;
overflow: hidden;
display: flex;
flex-direction: column;
gap: 24px;
margin-top: 24px;
.tab-list {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}
.tab-panel1 {
  padding-bottom: 48px;
}
.tab-panel2 {
  padding: 54px 0;
}
.tab {
  padding: 4px 8px;
  background: transparent;
  border: none;
  font-size: 16px;
  color: ${({theme}) => theme.colors.text};
  border-bottom: 3px solid transparent;
  &:focus {
    outline: none;
  }
}
.select-text {
  border-bottom: 3px solid #D26871;
}
.hover-text {
    background-color: none;
    background: none;
  }
}
`


const Todo: NextPage<TodoYearProps> = ({
  id,
  todos,
  user,
}: TodoYearProps) => {
  
  const { myTodos,setTodo } = useMyTodosContext()
  useEffect(() => {
    setTodo(todos)
  }, [setTodo, todos]);
  
  const yearCategory = myTodos.filter(todo => todo.category === 'year')
  const monthCategory = myTodos.filter(todo => todo.category === 'month')
  const weekCategory = myTodos.filter(todo => todo.category === 'week')
  const dayCategory = myTodos.filter(todo => todo.category === 'day')
  const timeCategory = myTodos.filter(todo => todo.category === 'time')
  const categoryNameDict: Record<string, Todo[]> = {
    year: yearCategory,
    month: monthCategory,
    week: weekCategory,
    day: dayCategory,
    time: timeCategory
  }

  const allCategory = categories.filter(c => c.category === 'all')
  const otherCategory = categories.filter(c => c.category !== 'all')
  //const thisCategory = categories.filter(c => Object.keys(categoryNameDict).map(t => t === c.category))

  return (
    <Layout>
      <TodoRoot>
        <TabGroup>
          <TabList className="tab-list">
            {categories.map(({label}) => (
              <Tab
                key={label}
                as={Fragment}
              >
                {({ hover, selected }) => (
                  <button className={classNames('tab',hover && 'hover-text', selected && 'select-text')}>{label}</button> 
              )}
              </Tab>
            ))}
          </TabList>
          <Separator />
          <TabPanels>
          { allCategory.map(({label}) => (
              <TabPanel key={label} className="tab-panel1">
                { otherCategory.map(({label,category}) => (
                  <Fragment key={label}>
                    <Box $marginTop={2} $marginBottom={2} $textAlign='center'>
                      <Text $fontSize='Medium' $fontWeight="400" $lineHeight="1.4" $color='text'>
                        {categoryNameDict[category].length === 0 ? '' : `${label}`}
                      </Text>
                    </Box>
                    <UserTodoListContainer userId={id} todos={categoryNameDict[category]} category={category} period={label} user={user}/>
                  </Fragment>
                ))}
              </TabPanel>
            ))}
            { otherCategory.map(({label,category}) => (
              <TabPanel key={label} className="tab-panel2">
                <UserTodoListContainer userId={id} todos={myTodos} category={category} period={label} user={user}/>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </TodoRoot>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  }
  const users = await getAllUsers(context)
  const paths = users.map((u) => `/users/${u.id}/todo`)
  return { paths, fallback: false }
}

export const getStaticProps = async({params}: GetStaticPropsContext) => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  }

  if(!params) {
    throw new Error('params is undefined')
  }

  const userId = Number(params.id)
  const [ user, todos] = await Promise.all([
    getUser(context,{ id: userId}),
    getAllTodos(context, { userId }),
  ])

  return {
    props: {
      id: userId,
      user,
      todos,
    },
    revalidate: 10,
  }
}

export default Todo
