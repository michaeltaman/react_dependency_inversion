
export type ChildComponent = React.FC<{}>;

export const ComponentA =({children}: { children: React.ReactNode}) => {

    return (
        <div className="text-red-600">
            <h1>Component A</h1>
            <div className='px-5'>
                Children:
               {children}
            </div>
        </div>
    )
}