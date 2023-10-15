"use client";


import useGetSongById from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/usePlayer";
import React from "react";
import PlayerContent from "./PlayerContent";

const Player = () => {

    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);

    const songUrl = song ?
        `https://cdfwdaxbcikhoqjlggqk.supabase.co/storage/v1/object/public/songs/${song?.song_path}`
        : ""

    if(!song || !songUrl || !player.activeId){
        return null;
    }

    return (
        <div className="fixed bottom-0 bg-black w-full py-2 h-[100px] px-4">
            <PlayerContent
            key={songUrl}
            song={song}
            songUrl={songUrl}
            />
        </div>
    )
};

export default Player;
