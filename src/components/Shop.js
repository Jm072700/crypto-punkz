import ShopRobot from './ShopRobot.js'
import banner from '../assets/shop-banner.png'
import shopBg from '../assets/shop-modal-bg.png'

const Shop = ({ setIsOpen, shopRobots, setShopRobots ,onBuy, coins, click}) => {
    const sortedRobots = shopRobots.sort((a, b) => (a.price > b.price) ? 1 : (a.price < b.price) ? -1 : 0)
    setShopRobots(sortedRobots)
    
    return (
        <div>
            <div className='dark-bg'  onClick={() => setIsOpen(false)}></div>
            <div className='shop-modal'>
                <img src={shopBg} className='shop-bg' alt='Shop Modal Background' />
                <div className='shop-container'>
                    {shopRobots.map((shopRobot) => (
                        <ShopRobot key={shopRobot.id} shopRobot={shopRobot} onBuy={onBuy} coins={coins} click={click}/>
                    ))}
                </div>
                <img src={banner} className='shop-banner' alt='SHop Banner' />
                <input type="button" className='close-btn' onClick={() => {setIsOpen(false); click();}}/>
            </div>
        </div>
    )
}

export default Shop