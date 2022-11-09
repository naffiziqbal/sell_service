const { useEffect } = require("react")

const useTitle = title => {
    useEffect(()=> {
        document.title = `${title} - CinemaWala`
    },[title])
}

export default useTitle
