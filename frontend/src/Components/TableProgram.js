import { ExpendableButton } from "./ExpendableButton";
import { TableKegiatan } from "./TableKegiatan";
import useOpenController from '../Hooks/useOpenController'
import { useNavigate } from 'react-router-dom'

export const TableProgram = ({item, index}) => {
    const { isOpen, toggle } = useOpenController(false);
    const navigate = useNavigate()

    const addKegiatan  = (item) => {
        navigate(`/tambahKegiatan/${item}`)
    }

    const editProgram = (item) => {
        navigate(`/editProgram/${item}`)
    }

    if (sessionStorage.getItem('role') === 'admin'){
        return (
            <tbody key={index}>
                <tr key={index+1}>
                    <td className="button-td">
                        <ExpendableButton isOpen={isOpen} toggle={toggle} />
                    </td>
                    <td colSpan={4}>{index + 1}</td>
                    <td>{item.rek_P4}</td>
                    <td>{item.nama}</td>
                    <td>
                        <button onClick={() => addKegiatan(item.id)}><i className="bi bi-plus" ></i></button><br />
                        <button onClick={() => editProgram(item.id)}><i className="bi bi-pencil" ></i></button>
                    </td>
                </tr>
                <tr key={index+2}>
                    <td colSpan={7}>
                        {isOpen && item.kegiatans.map((kegiatan, index) => (
                            <TableKegiatan kegiatan={kegiatan} index={index} />
                        ))
                        }
                    </td>
                </tr>
            </tbody>
        )
    } else {
        return (
            <tbody key={index}>
                <tr key={index+1}>
                    <td className="button-td">
                        <ExpendableButton isOpen={isOpen} toggle={toggle} />
                    </td>
                    <td colSpan={4}>{index + 1}</td>
                    <td>{item.rek_P4}</td>
                    <td>{item.nama}</td>
                </tr>
                <tr key={index+2}>
                    <td colSpan={7}>
                        {isOpen && item.kegiatans.map((kegiatan, index) => (
                            <TableKegiatan kegiatan={kegiatan} index={index} />
                        ))
                        }
                    </td>
                </tr>
            </tbody>
        )
    }
}