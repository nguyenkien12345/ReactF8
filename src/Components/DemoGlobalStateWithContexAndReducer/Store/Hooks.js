// Khắc phục việc lúc nào cũng phải import useContext và StoreContext ở các file muốn sử dụng context. Thay vì phải gọi 2 dòng này thì bây giờ ta chỉ cần gọi 1 dòng bằng cách custom lại hook

import { useContext } from "react";
import { StoreContext } from '../Store';

export const useStore = () => {
    // Context này trả về state vs dispatch (vì value của nó là state,dispatch)
    const [state,dispatch] = useContext(StoreContext);
    return [state,dispatch];
}
