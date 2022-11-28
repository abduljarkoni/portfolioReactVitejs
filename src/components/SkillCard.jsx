import React from "react"
import {Link} from "react-router-dom"

export default function SkillCard ({title, image, content,link, multiLink })
{
    return (
        <div className="bg-white flex flex-col gap-2 w-full p-[20px] rounded-lg shadow-xl">
            <h1 className="text-[16px] font-bold capitalize"> {title }</h1>
            <img src={ image } alt={ title } className="w-full h-[200px] object-cover rounded-lg" />
            <p className="font-light">{content }</p>
            
            {/* membuat kondisional rendering untuk handle link agar menggunakan multiLink */}
            { link && (
                <Link to={ link } className=" w-[180px] h-10 bg-orange-400 rounded-full flex justify-center items-center mx-auto">
                Lihat Portfolio
            </Link>
            ) }
            
            {/* buat kondisional rendering untuk handle multiLink dan kita maping*/}
            { multiLink && (
                <div className="mt-4 text-sky-900 flex gap-2 flex-wrap justify-center">
                    { multiLink.map( ( i ) =>
                    {
                        return (
                            // name dan url di dapat dari dataDetailSkill.js terdapat url dan name
                        //    supaya tidak error tambahkan key "key={ i.id }""
                            <a href={ i.url } key={ i.id } target="_blank" className="italic">{ i.name }</a>
                    )
                })}
                </div>
                )}
            
        </div>
    )
}