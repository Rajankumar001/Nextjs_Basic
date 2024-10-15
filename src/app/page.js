import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-centre">
     <h1>hello,Rajan</h1>
     <Link href='/about' replace>about</Link>
    </div>
  );
}
