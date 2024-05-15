
export type ChildComponent = React.FC<{}>;

export const ComponentA =({Component}: {Component: ChildComponent}) => {

    return (
        <div className="text-red-600">
            <h1>Component A</h1>
            <div className='px-5'>
                Children:
                <Component />
                <Component />
                <Component />
            </div>
        </div>
    )
}