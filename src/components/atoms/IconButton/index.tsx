import {
  PersonOutline,
  CheckBoxOutlineBlank,
  CheckBox,
  Cancel,
  CloudUpload,
  FileUpload,
  Close,
  Person,
  AccountCircle,
  Checklist,
  DoneOutline,
  TaskAlt,
  KeyboardDoubleArrowRight,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Star,
  Done,
  DeleteForever,
  CancelPresentation,
  Create,
  NoAccounts,
  EmojiEvents,
  Logout,
  Settings,
} from '@mui/icons-material'
import SvgIcon from '@mui/material/SvgIcon'
import styled from 'styled-components'
import { theme } from 'themes'

// list out color types
export type ThemeColors = keyof typeof theme.colors

interface IconWrapperProps {
  size: number
  cursor?: string
  color?: ThemeColors
  backgroundColor?: string
  
}

const IconWrapper = styled.div<IconWrapperProps>`
  display: inline-block;
  font-size: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  color: ${({ theme, color }) => {
    if (color) {
      return theme.colors[color]
    }

    return theme.colors.icon
  }};
  svg {
    display: block;
  }
`

export interface IconButtonProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>
  color?: ThemeColors
  className?: string
  backgroundColor?: string
  size?: number
}

/**
 * アイコンボタン
 */
function withIconStyle(
  Icon: typeof SvgIcon,
): React.ComponentType<IconButtonProps> {
  const IconWithStyle = (props: IconButtonProps) => {
    const { onClick, className, size = 24, ...rest } = props
    const cursor = onClick ? 'pointer' : ''

    return (
      <IconWrapper data-testid="star" cursor={cursor} size={size} role="button" onClick={onClick} {...rest} >
        <Icon
          className={className}
          fontSize="inherit"
          color="inherit"
        />
      </IconWrapper>
    )
  }

  return IconWithStyle
}

export const CloseIcon = withIconStyle(Close)

export const CloudUploadIcon = withIconStyle(CloudUpload)

export const CancelIcon = withIconStyle(Cancel)

export const CheckBoxOutlineBlankIcon = withIconStyle(CheckBoxOutlineBlank)

export const CheckBoxIcon = withIconStyle(CheckBox)

export const PersonIcon = withIconStyle(Person)

export const PersonOutlineIcon = withIconStyle(PersonOutline)

export const FileUploadIcon = withIconStyle(FileUpload)

export const AccountCircleIcon = withIconStyle(AccountCircle)

export const DoneOutlineIcon = withIconStyle(DoneOutline)

export const DoneIcon = withIconStyle(Done)

export const ChecklistIcon = withIconStyle(Checklist)

export const TaskAltIcon = withIconStyle(TaskAlt)

export const KeyboardDoubleArrowRightIcon = withIconStyle(KeyboardDoubleArrowRight)

export const KeyboardArrowDownIcon = withIconStyle(KeyboardArrowDown)

export const KeyboardArrowUpIcon = withIconStyle(KeyboardArrowUp)

export const StarIcon = withIconStyle(Star)

export const DeleteForeverIcon = withIconStyle(DeleteForever)

export const CancelPresentationIcon = withIconStyle(CancelPresentation)

export const CreateIcon = withIconStyle(Create)

export const NoAccountsIcon = withIconStyle(NoAccounts)

export const LogoutIcon = withIconStyle(Logout)

export const EmojiEventsIcon = withIconStyle(EmojiEvents)

export const SettingsIcon = withIconStyle(Settings)