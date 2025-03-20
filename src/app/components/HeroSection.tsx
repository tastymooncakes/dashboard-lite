const HeroSection = () => {
    return <div className="flex flex-col justify-between w-full h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-white m-5 sm:m-10 max-w-md">
            <h1 className="text-5xl sm:text-7xl mb-3">Capture.</h1>
            <h1 className="text-5xl sm:text-7xl mb-3">Capitalize.</h1>
            <h1 className="text-5xl sm:text-7xl mb-3">Manage.</h1>
            <p className="text-xl sm:text-2xl mt-10">Empower your creativity with Capture Dashboard.</p>
        </div>
        <div className="text-white max-w-md mb-0 sm:mb-10 ml-0 sm:ml-10 p-5 sm:p-0">
            <p className="leading-none">Empower your creativity with Capture Dashboard—Capture your ideas, Coordinate your workflow, and Capitalize on your content. Free-to-use and is ideal for individuals and small teams looking to publish and monetize their work.</p>
            <p className="mt-3">Powered by Numbers Protocol.</p>
        </div>
    </div>
}

export default HeroSection