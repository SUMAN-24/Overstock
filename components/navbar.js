function navbar() {
    return `
    <div class="ships">
        <div>
            Ships to:
        </div>
        <a href="#" class="country">
            <img src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif" 
            title="Click to change Country or Currency" alt="India flag" 
            class="FlagPic">
            
            <div class="country_name">India</div>
        </a>
    </div>
    <div>
        <div class="liner"></div>
        <div class="userbar">
            <a href="/index.html">
            <img src="/images/overstock.com_1516987437.png" alt="overstock logo">
            </a>
            <div >
                <input oninput="debounce(main,500)" type="text" placeholder="Search">
            </div>
            <button aria-label="search" type="submit" class="search_butn">
                <svg width="22" height="22" viewBox="0 0 24 24" stroke="#2F3337" fill="#FFFFFF">
                <title>Search</title>
                <path d="M22 22l-6.344-6.344M10 18a8 8 0 100-16 8 8 0 000 16z" stroke="inherit" fill="none" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                </path>
                </svg>
            </button>
            <div class="user_details">
                <a href="/login.html"><div class="user_details1">
                    <i class="fa-regular fa-user fa-customize"></i>
                    <p title="User">Account</p>
                </div></a>
                <div class="user_details1">
                    <i class="fa-regular fa-heart fa-customize"></i>
                    <p title="Heart">Lists</p>
                </div>
                <div class="user_details1">    
                    <i class="fa-solid fa-cart-shopping fa-customize"></i>
                    <p title="Cart Empty">Cart</p>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="liner1"></div>
        <div class="navbars">
            <div class="navbar_contents">
                <a href="#">Furniture</a>
                <a href="#">Rugs</a>
                <a href="#">Decor</a>
                <a href="#">Bed & Bath</a>
                <a href="#">Home Improvement</a>
                <a href="#">Kitchen</a>
                <a href="#">Outdoor</a>
                <a href="#">Jewelry</a>
                <a href="#">Lighting</a>
                <a href="#">Kids & Baby</a>
                <a href="#">More</a>
                <p style="color:rgb(235,236,237)">|</p>
                <a href="#">Ideas</a>
                <a href="#" style="color:rgb(211,90,98)">Sales & Deals</a>
            </div>
        </div>
        <div class="liner2"></div>
    </div>
    `
}

export {navbar};