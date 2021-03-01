import { ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => {console.log('hi')}}>
        asdsadas
    </ChildAsFC>
};

export default Parent;