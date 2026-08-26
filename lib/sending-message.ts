export async function SendingMessage(customer_name: string,  customer_email: string, organization_name: string, customer_phone: string, customer_description: string, serviceCategory:string) {
    const token = process.env.BOT_TOKEN!;
    const chat_id = process.env.ADMIN_CHAT_ID!;


    const message = `
🛒 *Geez Sec New Customer*
------------------------------------------
👤 *Full Name:* ${customer_name}
✉️ *Email:* ${customer_email}
📞 *Phone:* ${customer_phone}
🏢 *Organization:* ${organization_name}
👟 *Description:* ${customer_description}
📊 *Service Category:* ${serviceCategory}
------------------------------------------
`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id,
            text: message,
            parse_mode: "Markdown"
        })
    });
}