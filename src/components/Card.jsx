const Card = () => {
    return (
        <div className="w-full max-w-sm lg:max-w-full lg:flex">
            <div className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
                <div className="mb-8">
                    <p className="flex items-center text-sm text-gray-600">
                        <svg className="w-3 h-3 mr-2 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                    <div className="mb-2 text-xl font-bold text-gray-900">Can coffee make you a better developer?</div>
                    <p className="text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 mr-4 rounded-full" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
                    <div className="text-sm">
                        <p className="leading-none text-gray-900">Jonathan Reinink</p>
                        <p className="text-gray-600">Aug 18</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;