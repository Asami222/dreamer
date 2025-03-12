import styled from "styled-components";
import Text from "components/atoms/Text";

interface ListItemProps {
  active: boolean;
  label: string;
}

const StyledText = styled(Text)<{ active: boolean }>`
color: ${({active, theme}) => active && theme.colors.borderDash}
`

const ListItem =({
  active,
  label
}: ListItemProps) => {
  return (
    <StyledText $fontSize='medium' $color='text' $textAlign='center' active={active} >{label}</StyledText>
  )
}

export default ListItem
