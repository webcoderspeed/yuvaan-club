import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import RiteshImg from '../../public/ritesh2.jpeg';
import LogoImg from '../../public/logo.jpeg';
import IbcImg from '../../public/ibc.webp';
import TapologyImg from '../../public/tapolog.png';
import BoxRecImg from '../../public/boxrec.jpg';
import InstaImg from '../../public/Instagram_icon.png.webp';
import UpiImg from '../../public/upi.jpeg';
import { Globe } from 'lucide-react';
import type { Metadata } from 'next';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTrigger,
	DialogTitle
} from '@/components/ui/dialog';


export const metadata: Metadata = {
	title: 'Yuvaan Club',
	description: `Ritesh born in 2002 in Wan
							village, Chamoli, Uttarakhand, India, comes from a family of four
							siblings with strong farming roots. Raised in the mountains,
							Ritesh developed a passion for physical activity from a young age,
							discovering his love for amateur boxing at 13. This early interest
							in the sport paved the way for his transition to professional
							boxing in 2023, marking the beginning of his promising career`,
};
 

export default function Page() {
	return (
		<div className='min-h-screen bg-background'>
			<Dialog>
				<DialogContent className='overflow-y-scroll h-[40rem]'>
					<DialogHeader className='mt-6'>
						<DialogTitle className='text-center w-full mb-2'>Thank you 🙏</DialogTitle>
						<DialogDescription>
							<table className='min-w-full table-auto'>
								<tbody>
									<tr className='border-b'>
										<td className='px-4 py-2 text-sm  text-black font-extrabold'>
											Bank Name
										</td>
										<td className='px-4 py-2 text-sm'> Punjab & Sindh Bank</td>
									</tr>

									<tr className='border-b'>
										<td className='px-4 py-2 text-sm  text-black font-extrabold'>
											Account Number
										</td>
										<td className='px-4 py-2 text-sm'>01341000030103</td>
									</tr>
									<tr className='border-b'>
										<td className='px-4 py-2 text-sm  text-black font-extrabold'>
											IFSC
										</td>
										<td className='px-4 py-2 text-sm'>PSIB0000134</td>
									</tr>
								</tbody>
							</table>

							<div className='flex items-center w-full'>
								<div className='h-1 w-full bg-gray-200 my-6'></div>
								<p className='text-center text-black px-2'>OR</p>
								<div className='h-1 w-full bg-gray-200 my-6'></div>
							</div>

							<table className='min-w-full table-auto mb-4'>
								<tbody>
									<tr className='border-b'>
										<td className='px-4 py-2 text-sm  text-black font-extrabold'>
											UPI ID
										</td>
										<td className='px-4 py-2 text-sm'>9084406163@ybl</td>
									</tr>
								</tbody>
							</table>

							<Image
								alt='Upi photo'
								className='w-full'
								src={UpiImg.src}
								priority
								height={800}
								width={800}
							/>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>

				<header className='border-b'>
					<nav className='container flex h-14 items-center justify-between px-4 py-8 bg-gray-50'>
						<Link
							className='font-semibold flex items-center'
							href='/'
						>
							<Image
								alt='Profile photo'
								className='h-6 md:h-12 w-full md:object-cover'
								src={LogoImg.src}
								priority
								height={800}
								width={800}
							/>
							<span className='tilt-neon ml-2 text-2xl'>Yuvaan.club</span>
						</Link>
					</nav>
				</header>
				<main className='container grid gap-6 pb-8 mt-2 md:pt-6 px-4 md:grid-cols-2 mx-auto w-full md:gap-8'>
					<div className='relative overflow-hidden rounded-lg'>
						<Image
							alt='Profile photo'
							className='h-96 md:h-[32rem] w-full rounded-lg'
							src={RiteshImg.src}
							priority
							height={800}
							width={800}
						/>
					</div>
					<div className='flex flex-col gap-6'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tight text-[#333]'>
								Ritesh Singh Bisht
							</h1>
							<p className='text-xl text-slate-700 '>
								I kindly request your support for my{' '}
								<Link
									href='https://timesofindia.indiatimes.com/sports/boxing/laldinsanga-to-highlight-fight-night-in-bengaluru/articleshow/114952819.cms#:~:text=Bengaluru%20is%20set%20to%20host,10%20bouts%2C%20including%20international%20contenders'
									className='text-[#115991] font-bold underline'
									target='_blank'
								>
									upcoming fight
								</Link>{' '}
								on{' '}
								<span className='font-semibold text-[#115991] '>
									Saturday, 30th November 2024
								</span>
								, in Bengaluru. Your contribution would be of real help.
							</p>
						</div>
						<DialogTrigger className='flex items-center w-full'>
							<Button
								className='bg-[#347319] hover:bg-[#4A7328] w-full'
								size='lg'
							>
								<Globe
									className='mr-2 h-12 w-12'
									size={32}
								/>
								<span className='font-bold text-xl'>Contribute</span>
							</Button>
						</DialogTrigger>
						<p className='text-muted-foreground'>
							<span className='font-bold'>Ritesh</span>, born in 2002 in Wan
							village, Chamoli, Uttarakhand, India, comes from a family of four
							siblings with strong farming roots. Raised in the mountains,
							Ritesh developed a passion for physical activity from a young age,
							discovering his love for amateur boxing at 13. This early interest
							in the sport paved the way for his transition to professional
							boxing in 2023, marking the beginning of his promising career.
						</p>
						<div className='overflow-x-auto'>
							<table className='min-w-full table-auto'>
								<tbody>
									<tr className='border-b'>
										<td className='px-4 py-2 text-sm text-black font-extrabold'>
											Age
										</td>
										<td className='px-4 py-2 text-sm '>22</td>
									</tr>

									<tr className='border-b'>
										<td className='px-4 py-2 text-sm text-black font-extrabold'>
											India Rank
										</td>
										<td className='px-4 py-2 text-sm '>8</td>
									</tr>
									<tr className='border-b'>
										<td className='px-4 py-2 text-sm text-black font-extrabold'>
											Pro Record
										</td>
										<td className='px-4 py-2 text-sm '>4-0-0</td>
									</tr>

									<tr className='border-b'>
										<td className='px-4 py-2 text-sm text-black font-extrabold'>
											Division
										</td>
										<td className='px-4 py-2 text-sm '>Light Heavy (79 kg)</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className='flex gap-4'>
							<Link
								href='https://www.instagram.com/beastwolfuk/'
								target='_blank'
							>
								<Image
									alt='ritesh-singh-bisht'
									src={InstaImg.src}
									className='h-6 w-6 text-muted-foreground hover:text-foreground'
									priority
									height={800}
									width={800}
								/>
							</Link>
							<Link
								href='https://boxrec.com/en/box-pro/1165937'
								target='_blank'
							>
								<Image
									alt='box-rec'
									src={BoxRecImg.src}
									className='h-6 w-6 text-muted-foreground hover:text-foreground'
									priority
									height={800}
									width={800}
								/>
							</Link>
							<Link
								href='https://www.indianboxingcouncil.com/indian-professional-boxing-rankings-men/'
								target='_blank'
							>
								<Image
									alt='indianboxingcouncil'
									src={IbcImg.src}
									className='h-6 w-6 text-muted-foreground hover:text-foreground'
									priority
									height={800}
									width={800}
								/>
							</Link>
							<Link
								href='https://www.tapology.com/fightcenter/fighters/394741-ritesh-singh'
								target='_blank'
							>
								<Image
									alt='tapalogy'
									src={TapologyImg.src}
									className='h-6 w-6 text-muted-foreground hover:text-foreground'
									priority
									height={800}
									width={800}
								/>
							</Link>
						</div>
					</div>
				</main>
				<footer className='mx-auto w-full max-w-7xl p-4'>
					<div className='text-xs flex items-center justify-between flex-wrap'>
						<span>
							© 2024 Yuvaan.club in Association With{' '}
							<Link
								href='https://www.instagram.com/doonfightclub/'
								className='text-[#cc0000] font-bold'
								target='_blank'
							>
								Doon Fight Club
							</Link>
							. <span className='font-lighten'>All Rights Reserved.</span>
						</span>
						<span className='text-right'>
							<span className='text-xs'>Powered By </span>
							<Link
								href='http://auotam.com/'
								className='text-[#cc0000] font-bold'
								target='_blank'
							>
								AUOTAM
							</Link>
						</span>
					</div>
				</footer>
			</Dialog>
		</div>
	);
}
