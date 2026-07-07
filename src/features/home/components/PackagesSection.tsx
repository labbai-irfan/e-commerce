import { Link } from 'react-router-dom'
import { formatCurrency } from '@/lib/utils'
import { ROUTES } from '@/lib/constants'
import type { PackageCard } from '@/mocks/home'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/shared/SectionHeader'

/** "Build Your Bundle & Save More!" orange banner. */
export function BundleBanner() {
  return (
    <Link
      to={ROUTES.category('stationery')}
      className="block w-full overflow-hidden rounded-[18px] transition-transform hover:-translate-y-0.5"
    >
      <img
        src="/components/carousel2.png"
        alt="Build Your Bundle"
        loading="lazy"
        className="w-full object-contain"
      />
    </Link>
  )
}

/** "Shop by Packages" — smart kit cards. */
export function PackagesSection({ packages }: { packages?: PackageCard[] }) {
  if (!packages?.length) return null
  return (
    <section>
      <SectionHeader
        title="Shop by Packages"
        subtitle="Everything you need, in one smart kit"
        viewAllHref={ROUTES.category('stationery')}
      />
      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-4">
        {packages.map((pkg) => (
          <Link
            key={pkg.name}
            to={pkg.href}
            className="flex min-h-[142px] overflow-hidden rounded-[18px] bg-[#fdfaf6] p-3 shadow-[0_4px_12px_rgba(120,90,40,0.06)] transition-transform hover:-translate-y-0.5"
          >
            {/* Left Column */}
            <div className="flex flex-1 flex-col justify-between pr-2">
              <div>
                <h3 className="font-urbanist text-[13.5px] font-bold leading-tight text-[#2a2723]">{pkg.name}</h3>
                <p className="font-inter text-[10.5px] leading-[1.3] text-[#736c63] mt-1 line-clamp-2 min-h-[28px]">{pkg.blurb}</p>
              </div>
              <div className="mt-1">
                <div className="font-inter text-[9px] text-[#8c857c] font-medium leading-none">Starting From</div>
                <div className="font-inter mt-0.5 text-[18px] font-extrabold leading-none text-[#2a2723]">
                  {formatCurrency(pkg.price)}
                </div>
              </div>
              <span className="mt-2.5 flex items-center justify-center gap-[2px] rounded-full bg-[#f7941e] py-1.5 font-urbanist text-[11px] font-bold text-white shadow-[0_3px_10px_rgba(247,148,30,0.25)] transition-transform">
                Explore
                <Icon name="arrow_forward" size={13} />
              </span>
            </div>

            {/* Right Column */}
            <div className="flex w-[80px] shrink-0 items-center justify-center">
              <img src={pkg.image} alt={pkg.name} loading="lazy" className="max-h-[85px] max-w-full object-contain" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
