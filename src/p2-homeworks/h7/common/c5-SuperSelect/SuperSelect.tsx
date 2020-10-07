import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
    useState,
    useEffect,
    useRef
} from "react";
import s from "./SuperSelect.module.css"
import useOutSideClick from "./useOutSideClick";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        value,
        className,
        ...restProps
    }
) => {
    const [option, setOption] = useState(value)
    useEffect(() => {
        setOption(value)
    }, [value])
    const [isOpen, setOpen] = useState<boolean>(false)


    const mappedOptions: Array<JSX.Element> = options
        ? options.map((o, i) => <option key={i}>{o}</option>)
        : []// map options with key

    const mappedList: Array<JSX.Element> = options
        ? options.map((o, i) => <li onClick={() => onChangeSelect(o)} key={i}>{o}</li>)
        : []// map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        setOption(e.currentTarget.value)
    }
    const onChangeSelect = (value: string) => {
        onChangeOption && onChangeOption(value)
        setOption(value)
        setOpen(false)
    }
    const showList = () => setOpen(true)
    const hideList = () => setOpen(false)

    let curr = useRef(null)

    useOutSideClick(curr, setOpen)
    return (
        <>
            <select className={s.select} onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
            <div className={`${s.customSelect} ${className}`}>
                <span ref={curr} className={s.currentItem} onBlur={hideList} onClick={showList}>{option}<span className={s.arrow}></span></span>
                <div className={s.listWr}>
                    {isOpen && <ul ref={curr} className={s.list}>{mappedList}</ul>}
                </div>
            </div>
        </>
    );
}

export default SuperSelect;
