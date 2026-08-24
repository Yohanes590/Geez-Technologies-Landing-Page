import {SendingMessage} from "@/lib/sending-message";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
    const {name, email, organization, phone, message , serviceCategory} = await request.json();
    if(!name || !organization|| !email ||  !phone || !message || !serviceCategory) {
        return new Response(JSON.stringify({error: "Missing required fields"}), {status: 400});
    }else{
        await SendingMessage(name, email, organization, phone, message, serviceCategory);
        return NextResponse.json({message: "Message sent successfully"});
    }
}