import React,{Component} from 'react'
class Table extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>DSA</td>
                    </tr>
                    <tr>
                        <td>Harrie</td>
                        <td>MAD</td>
                    </tr>
                    <tr>
                        <td>Charlie</td>
                        <td>CN</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
export default Table;