export default function Table(){
    return(
        <>
            <tr>
                <th>ID</th>
                <th>Usuário</th>
                <th>Cargo</th>
                <th>Equipe</th>
                <th>Unidade</th>
                <th>Última vez ativo</th>
            </tr>
        </>
    )
}

export function Item(){
    return(
        <>
        <tr>
            <td>1</td>
            <td>Wellington Braga</td>
            <td>Software Engineer</td>
            <td>FCx Labs</td>
            <td>Ibiribeira</td>
            <td>00:00 00/00/0000</td>
        </tr>
        </>
    )
}