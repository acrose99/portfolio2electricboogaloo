import {styled} from "../stitches.config";
interface InlideCodeProps {
    children: React.ReactNode;
}

const StyledCode = styled('code', {
    display: 'inline-block',
    color : '$sage11',
    backgroundColor : '$sage5',
    borderRadius : '3px',
    fontFamily : '$robotoMono',
    lineHeight : '1.5',
    whiteSpace : 'pre-wrap',
    padding: '1px 4px',
});

function InlideCode({ children }: InlideCodeProps) {
    return <StyledCode>{children}</StyledCode>;
}

export default InlideCode;