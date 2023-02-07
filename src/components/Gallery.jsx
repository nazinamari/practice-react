
export const Gallery = ({pixs}) => {
    return (
    <ul>
        {pixs.map(({name, id}) => (
            <li key={id}>
                <Item
                name={name}
                />
            </li>
        ))}
    </ul>)
};

const Item = ({name}) => {
    return <div>{name}</div>
};