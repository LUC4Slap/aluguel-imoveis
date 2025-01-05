export default function HeaderPage() {
    const items = [
        {
            key: "default",
            label: "Selecione um Serviço",
            disabled: true,
        },
        {
            key: "alugar",
            label: "Alugar",
            disabled: false,
        },
        {
            key: "comprar",
            label: "Comprar",
            disabled: false,
        }
    ]
    return (
        <header className="w-auto flex p-2 border-b-2" style={{justifyContent: 'space-between'}}>
            <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-1 items-center">
              Info CG
            </span>
            <div className="w-auto">
                <select id="countries"
                        defaultValue="default"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {items.map((item) => <option key={item.key} value={item.key} disabled={item.disabled}>{item.label}</option>)}
                </select>
            </div>
        </header>
    )
}