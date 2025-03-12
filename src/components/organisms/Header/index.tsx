import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import AppLogo from "components/atoms/AppLogo";
import { ChecklistIcon, AccountCircleIcon, CreateIcon, NoAccountsIcon, EmojiEventsIcon, LogoutIcon, PersonIcon, StarIcon, SettingsIcon } from "components/atoms/IconButton";
import ShapeImage from "components/atoms/ShapeImage";
import Spinner from "components/atoms/Spinner";
import Text from "components/atoms/Text";
import Flex from "components/layout/Flex";
import { useAuthContext } from 'contexts/AuthContext';
import { classNames } from 'lib/class-names';
import { roboto, m_plus_1p } from 'pages/_app'
import { useGlobalSpinnerActionsContext } from "contexts/GlobalSpinnerContext";

const HeaderRoot = styled.header`
  font-family: ${roboto.style.fontFamily},${m_plus_1p.style.fontFamily};
  width: 92%;
  margin: 0 auto;
  padding-top: 16px;
  height: 48px;
  .menu {
    position: relative;
  }
  .menu-button {
    display: block;
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
  }
  .menu-items {
    position: absolute;
    z-index: 5000;
    right: 0;
    width: 180px;
    margin-top: 8px;
    transform-origin: top right;
    background-color: #F7F2F2;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(177, 88, 82, 0.25);
    outline: 0;
  }
  .menu-items:focus {
    outline: none;
  }
  .wrapper {
    padding: 24px 16px;
  }
`;

const NavLink = styled.span`
  display: inline
`
interface ListItemProps {
  focus: boolean
  label: string
  className?: string
  onClick?: () => void
}

const ListItemBase =({
  focus,
  label,
  className
}: ListItemProps) => {
  return (
    <div className={className}>
      <Text className={classNames('text', focus && 'text-active')} >{label}</Text>
    </div>
  )
}

const ListItem = styled(ListItemBase)`
.text {
  font-size: 16px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.text};
  text-align: center;
}
.text-active {
  color: #E18883;
}
`
const StyledText = styled(Text)`
&:hover {
  color: ${({theme}) => theme.colors.text};
}
`

const StyledBtnBase =({
  focus,
  label,
  className,
  onClick
}: ListItemProps) => {
  return (
    <button className={className} onClick={onClick}>
      <Text className={classNames('text', focus && 'text-active')} >{label}</Text>
    </button>
  )
}
const StyledButton = styled(StyledBtnBase)`
  .text {
  font-size: 16px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.text};
  text-align: center;
  }
  .text-active {
    color: #E18883;
  }
  background: none;
  border: none;
}
`

interface MenuLinkProps {
  href: string
  children: React.ReactNode
}

const MenuLink =({
  href,
  children,
  ...rest
}: MenuLinkProps) => {
  return (
    <Link href={href} className="block" {...rest}>
      {children}
    </Link>
  );
}

const StyledDiv = styled.div`
height: 1px;
margin-block: 1px;
background-color: ${({theme}) => theme.colors.text};
opacity: 0.35;
`

const Header = () => {

  const { authUser, isLoading } = useAuthContext()
  const { signout } = useAuthContext()
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  const router = useRouter()

  const handleClick = async() => {
    try {
      setGlobalSpinner(true)
      await signout()
      router.push(`/`)
    } catch(err: unknown) {
      if(err instanceof Error) {
        window.alert(err.message)
      }
    } finally {
      setGlobalSpinner(false)
    }
  }

  return (
    <HeaderRoot>
      <Flex $justifyContent="space-between">
        <NavLink>
          <Link href='/'><AppLogo width="80px"/></Link>
        </NavLink>
        <Flex $gap="24px">
          <NavLink>
            {(() => {
              if(authUser) {
                return (
                  <Link href={`/users/${authUser.id}`}>
                    { authUser.profileImageUrl ?
                    <ShapeImage
                      shape="circle"
                      src={authUser.profileImageUrl}
                      width="24px"
                      height="24px"
                      data-testid="profile-shape-image"
                    />
                    :
                    <AccountCircleIcon size={24} color='text'/>
                    }
                  </Link>
                )
              } else if (isLoading) {
                return <Spinner size={20} strokeWidth={2} />
              } else {
                return (
                  <Link href="/signin">
                    <NoAccountsIcon size={24} color='text'/>
                  </Link>
                )
              }
            })()}
          </NavLink>
          <NavLink>
            <Link href='/newTodo'><CreateIcon size={24} color='text'/></Link>
          </NavLink>
          <NavLink>
          {(() => {
              if(authUser) {
                return (
                  <Link href={`/users/${authUser.id}/todo`}>
                    <ChecklistIcon size={24} color='text'/>
                  </Link>
                )
              } else if (isLoading) {
                return <Spinner size={20} strokeWidth={2} />
              } else {
                return (
                  <Link href="/signin">
                    <ChecklistIcon size={24} color='text'/>
                  </Link>
                )
              }
            })()}
          </NavLink>
          <NavLink>
          <Menu as="div" className="menu">
            <MenuButton className="menu-button">
                <SettingsIcon size={24} color='text'/>
            </MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="menu-items">
                <Flex className='wrapper' $flexDirection='column' $gap="24px">
                {(() => {
              if(authUser) {
                return (
                  <>
                    <MenuItem>
                      {({ focus }) => (
                        <MenuLink href={`/users/${authUser.id}/setting`}>
                            <Flex $gap="8px" $alignItems='center'>
                              <PersonIcon size={20} color={focus ? 'borderDash' : 'text'}/>
                              <ListItem
                                label="ユーザー設定"
                                focus={focus}
                              />
                            </Flex>
                        </MenuLink>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <MenuLink href={`/users/${authUser.id}/reward/new`}>
                            <Flex $gap="8px" $alignItems='center'>
                              <StarIcon size={20} color={focus ? 'borderDash' : 'text'}/>
                              <ListItem
                                label="ご褒美設定"
                                focus={focus}
                              />
                            </Flex>
                        </MenuLink>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <MenuLink href={`/users/${authUser.id}/reward/get`}>
                            <Flex $gap="8px" $alignItems='center'>
                              <EmojiEventsIcon size={20} color={focus ? 'borderDash' : 'text'}/>
                              <ListItem
                                label="ご褒美獲得記録"
                                focus={focus}
                              />
                            </Flex>
                        </MenuLink>
                      )}
                    </MenuItem>
                    <MenuItem>
                    <StyledDiv />
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <Flex $gap="8px" $alignItems='center'>
                          <LogoutIcon size={20} color={focus ? 'borderDash' : 'text'}/>
                          <StyledButton onClick={handleClick} label='ログアウト' focus={focus}>
                            
                          </StyledButton>
                        </Flex>
                      )}
                    </MenuItem>
                  </>
                )
              } else if (isLoading) {
                return <Spinner size={20} strokeWidth={2} />
              } else {
                return (
                  <Link href="/signin">
                    <StyledText $color='placeholder' $fontSize='medium' $fontWeight='500'>サインイン</StyledText>
                  </Link>
                )
              }
            })()}
                </Flex>
              </MenuItems>
            </Transition>
          </Menu>
          </NavLink>
        </Flex>
      </Flex>
    </HeaderRoot>
  )
}

export default Header

