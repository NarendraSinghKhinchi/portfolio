import react,{useRef,useState,useEffect} from 'react'

function ScrollIndicator() {
    const progressBarRef = useRef(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const maxScrollTop = documentHeight - windowHeight;
        const scrolledPercentage = (scrollTop / maxScrollTop) * 100;
  
        setScrollPercentage(scrolledPercentage);
      };
  
    //   const progressBarElement = progressBarRef.current;
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div>
        <div
          ref={progressBarRef}
          style={{
            width: `${scrollPercentage}%`,
            height: '5px',
            backgroundColor: 'red',
            position:'fixed',
            top:'60px',
            left:'0'
          }}
        />
      </div>
    );
}

export default ScrollIndicator
  